"use client";

import { fetchRegister } from "@/services/api/agencies/register";
import { ReqRegisterAgency } from "@/types/api/agencies/register";
import { SelectOptions } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useRegister = () => {
  const formSchema = z.object({
    name: z.string().min(1, "Agency Name is required"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    email: z.string().email("Invalid email address"),
    establishedYear: z
      .string()
      .min(4, "Invalid year")
      .regex(/^\d{4}$/, "Year must be 4 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    street: z.string().min(1, "Street is required"),
    district: z.string().min(1, "District is required"),
    city: z.string().min(1, "City is required"),
    province: z.string().min(1, "Province is required"),
    postalCode: z.string().min(1, "Postal Code is required"),
    country: z.string().min(1, "Country is required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      establishedYear: "",
      password: "",
      street: "",
      district: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
    },
  });

  const router = useRouter();

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      const requestData: ReqRegisterAgency = {
        name: values.name,
        phoneNumber: values.phoneNumber,
        email: values.email,
        establishedYear: Number(values.establishedYear),
        password: values.password,
        address: {
          street: values.street,
          district: values.district,
          city: values.city,
          province: values.province,
          postalCode: values.postalCode,
          country: values.country,
        },
      };
      const result = await fetchRegister(requestData);
      if (result.result) {
        toast(result.message, {
          description:
            "Your account has been successfully registered, please login.",
          action: {
            label: "Login",
            onClick: () => router.push("/auth/login"),
          },
        });
        form.reset();
      } else {
        toast(result.message, {
          className: "!text-red-500",
          action: {
            label: "Close",
            onClick: () => {},
          },
        });
      }
    },
    [form, router]
  );

  const districtOptions = useMemo((): SelectOptions[] => {
    return [
      { value: "bogor-barat", label: "Bogor Barat" },
      { value: "bogor-timur", label: "Bogor Timur" },
      { value: "bogor-selatan", label: "Bogor Selatan" },
      { value: "bogor-utara", label: "Bogor Utara" },
    ];
  }, []);
  const cityOptions = useMemo<SelectOptions[]>(() => {
    return [
      { value: "bogor", label: "Bogor" },
      { value: "depok", label: "Depok" },
      { value: "jakarta", label: "Jakarta" },
    ];
  }, []);

  const provinceOptions = useMemo<SelectOptions[]>(() => {
    return [
      { value: "jawa-barat", label: "Jawa Barat" },
      { value: "jawa-tengah", label: "Jawa Tengah" },
      { value: "dki-jakarta", label: "DKI Jakarta" },
    ];
  }, []);

  const postalCodeOptions = useMemo<SelectOptions[]>(() => {
    return [
      { value: "16110", label: "16110" },
      { value: "16111", label: "16111" },
      { value: "16112", label: "16112" },
    ];
  }, []);

  const countryOptions = useMemo<SelectOptions[]>(() => {
    return [{ value: "indonesia", label: "Indonesia" }];
  }, []);

  return {
    districtOptions,
    cityOptions,
    provinceOptions,
    postalCodeOptions,
    countryOptions,
    form,
    onSubmit,
  };
};

export default useRegister;
