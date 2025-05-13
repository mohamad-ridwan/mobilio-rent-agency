import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
      console.log(values);
    },
    [loadingSubmit]
  );
  return {
    form,
    loadingSubmit,
    onSubmit,
  };
};

export default useLogin;
