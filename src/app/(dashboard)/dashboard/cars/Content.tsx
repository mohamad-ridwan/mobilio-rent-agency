"use client";

import PaginationCard from "@/components/paginations/PaginationCard";
import TableCard from "@/components/tables/TableCard";
import TableCellCard from "@/components/tables/TableCellCard";
import TableHeadCard from "@/components/tables/TableHeadCard";
import TableRowCard from "@/components/tables/TableRowCard";
import useCars from "@/hooks/dashboard/cars/useCars";
import { CarListResponseType } from "@/types/api/cars";
import { flexRender } from "@tanstack/react-table";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { mobilioSession } from "@/constants/storage";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type Props = {
  carLists: CarListResponseType;
};

export default function Content({ carLists }: Props) {
  if (carLists?.status === 401) {
    Cookies.remove(mobilioSession);
    redirect("/auth/login");
  }
  const { table, columns } = useCars({ carLists });
  return (
    <>
      <TableCard
        filterEl={
          <>
            <div className="flex items-center py-4">
              <Input
                placeholder="Filter models..."
                value={
                  (table.getColumn("model")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("model")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        }
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
        paginationEl={
          <PaginationCard
            rowContent={
              <>
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </>
            }
            prevDisabled={!table.getCanPreviousPage()}
            nextDisabled={!table.getCanNextPage()}
          />
        }
      />
    </>
  );
}
