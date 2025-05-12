import AuthLayout from "@/components/layouts/auth/AuthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthNavigate from "@/components/layouts/auth/AuthNavigate";
import InputCard from "@/components/inputs/InputCard";

export default function LoginPage() {
  return (
    <AuthLayout
      prefixImg={`/${process.env.MAIN_PREFIX_IMAGE}/${process.env.AUTH_PREFIX_IMAGE}`}
      imageSrc="auth.webp"
    >
      <Card className="shadow-none border-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl text-neutral-900 dark:text-neutral-100">
            Login to Mobilio Rent
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <InputCard label="Email" id="email" placeholder="you@example.com" />
          <InputCard label="Password" id="password" placeholder="********" />
          <Button className="w-full mt-4" variant="default">
            Login
          </Button>
          <AuthNavigate
            desc={`Don${"'"}t have an account?`}
            navigateText="Create an account"
            slug="/auth/register"
          />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
