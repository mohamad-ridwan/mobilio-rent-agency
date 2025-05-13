import AuthLayout from "@/components/layouts/auth/AuthLayout";
import FormRegister from "./Form";

export default function RegisterPage() {
  return (
    <AuthLayout
      prefixImg={`/${process.env.MAIN_PREFIX_IMAGE}/${process.env.AUTH_PREFIX_IMAGE}`}
      imageSrc="auth.webp"
    >
      <FormRegister />
    </AuthLayout>
  );
}
