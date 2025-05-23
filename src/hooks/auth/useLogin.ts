import { fetchLogin } from "@/services/api/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Cookies from "js-cookie";
import { mobilioSession } from "@/constants/storage";

const useLogin = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      if (loadingSubmit) return;
      setLoadingSubmit(true);
      const result = await fetchLogin(values);
      if (result.result) {
        toast("Welcome to your control panel", {
          action: {
            label: "Close",
            onClick: () => {},
          },
        });
        form.reset();
        Cookies.set(mobilioSession, result.token as string);
        router.push("/dashboard/statistics");
      } else {
        toast(result.message, {
          className: "!text-red-500",
          action: {
            label: "Close",
            onClick: () => {},
          },
        });
      }
      setLoadingSubmit(false);
    },
    [loadingSubmit, form, router]
  );
  return {
    form,
    loadingSubmit,
    onSubmit,
  };
};

export default useLogin;
