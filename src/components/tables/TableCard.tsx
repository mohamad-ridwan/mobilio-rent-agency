"use client";

import { Table, TableBody, TableHeader } from "@/components/ui/table";
import { ReactElement } from "react";

type Props = {
  tableHeaderEl: ReactElement;
  tableBodyEl: ReactElement;
  paginationEl?: ReactElement;
  filterEl?: ReactElement;
};

export default function TableCard({
  tableHeaderEl,
  tableBodyEl,
  paginationEl,
  filterEl,
}: Props) {
  return (
    <div className="w-full">
      {filterEl}
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
