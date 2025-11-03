import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HeaderProps } from "../type";
import clsx from "clsx";
import { useId } from "react";

export default function ExpandableTableHeader({
  headers,
}: {
  headers: HeaderProps[];
}) {
  const key = useId();

  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[80px] text-center">Selecionar</TableHead>
        {headers.map((header, i) => {
          return (
            <TableHead
              className={clsx(
                "whitespace-pre-line",
                "h-fit",
                "py-2",
                header.align == "start" && "text-start",
                header.align == "center" && "text-center",
                header.align == "end" && "text-end"
              )}
              key={`${key}-${i}`}
              colSpan={header.colSize}
            >
              {header.label}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
}
