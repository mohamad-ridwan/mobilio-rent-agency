"use client";

import { Table, TableBody, TableHeader } from "@/components/ui/table";
import { ReactElement } from "react";

type Props = {
  tableHeaderEl: ReactElement;
  tableBodyEl: ReactElement;
  paginationEl?: ReactElement;
};

export default function TableCard({
  tableHeaderEl,
  tableBodyEl,
  paginationEl,
}: Props) {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>{tableHeaderEl}</TableHeader>
          <TableBody>{tableBodyEl}</TableBody>
        </Table>
      </div>
      {paginationEl}
    </div>
  );
}
