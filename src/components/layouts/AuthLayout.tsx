// components/layouts/AuthLayout.tsx

import { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils"; // dari shadcn, buat merge class

interface AuthLayoutProps {
  children: ReactNode;
  prefixImg: string
  imageSrc?: string;
  imageAlt?: string;
}

export default function AuthLayout({ children, prefixImg, imageSrc, imageAlt = "Auth Mobilio Rent" }: AuthLayoutProps) {
    
    const imageSrcCurrently = `${prefixImg}/${imageSrc}`
  return (
    <div className="flex min-h-screen">
      {/* LEFT - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-md w-full space-y-6">
          {children}
        </div>
      </div>

      {/* RIGHT - Image */}
      <div className={cn(
        "hidden lg:block relative w-1/2",
        "bg-neutral-100 dark:bg-neutral-900"
      )}>
        <Image
          src={imageSrcCurrently}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}