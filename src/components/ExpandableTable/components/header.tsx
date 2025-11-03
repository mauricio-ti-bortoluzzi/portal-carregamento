import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HeaderProps } from "../type";
import clsx from "clsx";

export default function ExpandableTableHeader({
  headers,
}: {
  headers: HeaderProps[];
}) {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[80px] text-center">Selecionar</TableHead>
        {headers.map((header) => (
          <TableHead
            className={clsx(
              "whitespace-pre-line",
              "h-fit",
              "py-2",
              header.align == "start" && "text-start",
              header.align == "center" && "text-center",
              header.align == "end" && "text-end"
            )}
            key={header.label}
            colSpan={header.colSize}
          >
            {header.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
