import * as React from "react";
import { TableCell } from "@/components/ui/table";

export default function TableCellCard({
  className,
  children,
  ...props
}: React.ComponentProps<"td">) {
  return (
    <TableCell className={className} {...props}>
      {children}
    </TableCell>
  );
}
