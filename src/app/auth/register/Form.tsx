"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthNavigate from "@/components/layouts/auth/AuthNavigate";
import InputCard from "@/components/inputs/InputCard";
import { SelectCard } from "@/components/selects/SelectCard";
import useRegister from "@/hooks/useRegister";
import { Form, FormField } from "@/components/ui/form";

export default function FormRegister() {
  const {
    districtOptions,
    cityOptions,
    provinceOptions,
    postalCodeOptions,
    countryOptions,
    onSubmit,
    form,
  } = useRegister();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="shadow-none border-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-900 dark:text-neutral-100">
              Register your Agency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/** Input Fields */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <InputCard
                  label="Agency Name"
                  placeholder="PT Maju Jaya Abadi"
                  id="name"
                  {...field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <InputCard
                  label="Phone Number"
                  id="phoneNumber"
                  placeholder="02511234567"
                  {...field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <InputCard
                  label="Email"
                  id="email"
                  placeholder="info@majujaya.com"
                  {...field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="establishedYear"
              render={({ field }) => (
                <InputCard
                  label="Established Year"
                  id="establishedYear"
                  placeholder="2010"
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
                  placeholder="********"
                  type="password"
                  {...field}
                />
              )}
            />

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Address Details
              </h3>

              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <InputCard
                    label="Street"
                    id="street"
                    placeholder="Jalan Contoh No. 45"
                    {...field}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <SelectCard
                    label="District"
                    id="district"
                    options={districtOptions}
                    placeholder="Select District"
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <SelectCard
                    label="City"
                    id="city"
                    options={cityOptions}
                    placeholder="Select City"
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <SelectCard
                    label="Province"
                    id="province"
                    options={provinceOptions}
                    placeholder="Select Province"
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <SelectCard
                    label="Postal Code"
                    id="postalCode"
                    options={postalCodeOptions}
                    placeholder="Select Postal Code"
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <SelectCard
                    label="Country"
                    id="country"
                    options={countryOptions}
                    placeholder="Select Country"
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />
            </div>

            <Button type="submit" className="w-full mt-4" variant="default">
              Register
            </Button>

            <AuthNavigate
              desc="Already have an account?"
              navigateText="Login"
              slug="/auth/login"
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
