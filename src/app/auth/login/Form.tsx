"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthNavigate from "@/components/layouts/auth/AuthNavigate";
import InputCard from "@/components/inputs/InputCard";
import { Form, FormField } from "@/components/ui/form";
import useLogin from "@/hooks/auth/useLogin";

export default function LoginForm() {
  const { form, onSubmit, loadingSubmit } = useLogin();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="shadow-none border-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-900 dark:text-neutral-100">
              Login to Your Company
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <InputCard
                  label="Email"
                  placeholder="you@example.com"
                  id="email"
                  {...field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <InputCard
                  label="Password"
                  id="password"
                  placeholder="••••••••"
                  {...field}
                />
              )}
            />
            <Button
              type="submit"
              className="w-full mt-4 cursor-pointer"
              variant="default"
              disabled={loadingSubmit}
            >
              Login
            </Button>
            <AuthNavigate
              desc={`Don${"'"}t have an account?`}
              navigateText="Create an account"
              slug="/auth/register"
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
