// pages/auth/login.tsx

import AuthLayout from "@/components/layouts/AuthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <AuthLayout prefixImg={`/${process.env.MAIN_PREFIX_IMAGE}/${process.env.AUTH_PREFIX_IMAGE}`} imageSrc="auth.webp">
      <Card className="shadow-none border-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl text-neutral-900 dark:text-neutral-100">Login to Mobilio Rent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
          <Button className="w-full mt-4" variant="default">Login</Button>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}