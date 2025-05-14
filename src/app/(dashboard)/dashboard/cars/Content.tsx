"use client";

import PaginationCard from "@/components/paginations/PaginationCard";
import TableCard from "@/components/tables/TableCard";
import TableCellCard from "@/components/tables/TableCellCard";
import TableHeadCard from "@/components/tables/TableHeadCard";
import TableRowCard from "@/components/tables/TableRowCard";
import { DataTableDemo } from "@/components/tables/TableTest";
import useCars from "@/hooks/dashboard/cars/useCars";
import { flexRender } from "@tanstack/react-table";

export default function Content() {
  const { table, columns } = useCars();
  return (
    <>
      <TableCard
        tableHeaderEl={
          <>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRowCard key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHeadCard key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHeadCard>
                  );
                })}
              </TableRowCard>
            ))}
          </>
        }
        tableBodyEl={
          <>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRowCard
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCellCard key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCellCard>
                  ))}
                </TableRowCard>
              ))
            ) : (
              <TableRowCard>
                <TableCellCard
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCellCard>
              </TableRowCard>
            )}
          </>
        }
        paginationEl={<PaginationCard />}
      />
      <DataTableDemo />
    </>
  );
}
