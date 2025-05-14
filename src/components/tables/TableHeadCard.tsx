import * as React from "react";
import { TableHead } from "@/components/ui/table";

export default function TableHeadCard({
  className,
  children,
  ...props
}: React.ComponentProps<"th">) {
  return (
    <TableHead className={className} {...props}>
      {children}
    </TableHead>
  );
}
