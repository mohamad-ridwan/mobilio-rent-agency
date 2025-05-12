import AuthLayout from "@/components/layouts/auth/AuthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthNavigate from "@/components/layouts/auth/AuthNavigate";
import InputCard from "@/components/inputs/InputCard";

export default function RegisterPage() {
  return (
    <AuthLayout
      prefixImg={`/${process.env.MAIN_PREFIX_IMAGE}/${process.env.AUTH_PREFIX_IMAGE}`}
      imageSrc="auth.webp"
    >
      <Card className="shadow-none border-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl text-neutral-900 dark:text-neutral-100">
            Register your Agency
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <InputCard
            label="Agency Name"
            id="name"
            placeholder="PT Maju Jaya Abadi"
          />
          <InputCard
            label="Phone Number"
            id="phoneNumber"
            placeholder="02511234567"
          />
          <InputCard label="Email" id="email" placeholder="info@majujaya.com" />
          <InputCard
            label="Established Year"
            id="establishedYear"
            placeholder="2010"
          />
          <InputCard label="Password" id="password" placeholder="********" />

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
              Address Details
            </h3>
            <InputCard
              label="Street"
              id="street"
              placeholder="Jalan Contoh No. 45"
            />
            <InputCard
              label="District"
              id="district"
              placeholder="Bogor Barat"
            />
            <InputCard label="City" id="city" placeholder="Bogor" />
            <InputCard
              label="Province"
              id="province"
              placeholder="Jawa Barat"
            />
            <InputCard
              label="Postal Code"
              id="postalCode"
              placeholder="16110"
            />
            <InputCard label="Country" id="country" placeholder="Indonesia" />
          </div>

          <Button className="w-full mt-4" variant="default">
            Register
          </Button>

          <AuthNavigate
            desc="Already have an account?"
            navigateText="Login"
            slug="/auth/login"
          />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
