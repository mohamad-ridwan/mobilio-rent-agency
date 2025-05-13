import AuthLayout from "@/components/layouts/auth/AuthLayout";
import LoginForm from "./Form";

export default function LoginPage() {
  return (
    <AuthLayout
      prefixImg={`/${process.env.MAIN_PREFIX_IMAGE}/${process.env.AUTH_PREFIX_IMAGE}`}
      imageSrc="auth.webp"
    >
      <LoginForm />
    </AuthLayout>
  );
}
