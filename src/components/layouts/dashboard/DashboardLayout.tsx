import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function DashboardLayout({ title, children }: Props) {
  return (
    <div className="p-6 min-h-dvh max-h-dvh !overflow-y-auto flex flex-col">
      <div className="flex flex-col max-h-full">
        <h1 className="font-semibold text-2xl text-neutral-800">{title}</h1>
        <div className="w-full flex flex-col">{children}</div>
      </div>
    </div>
  );
}
