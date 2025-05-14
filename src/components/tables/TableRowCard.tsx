import * as React from "react";
import { TableRow } from "@/components/ui/table";

export default function TableRowCard({
  className,
  children,
  ...props
}: React.ComponentProps<"tr">) {
  return (
    <TableRow className={className} {...props}>
      {children}
    </TableRow>
  );
}
