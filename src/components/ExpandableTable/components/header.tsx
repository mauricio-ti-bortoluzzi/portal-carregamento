import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HeaderProps } from "../type";

export default function ExpandableTableHeader({
  headers,
  select,
}: {
  headers: HeaderProps[];
  select: boolean;
}) {
  return (
    <TableHeader>
      <TableRow>
        {select && (
          <TableHead className="w-[80px] text-center">Selecionar</TableHead>
        )}
        {headers.map((header) => (
          <TableHead
            className={`text-${header.align}`}
            key={header.label}
            colSpan={header.colSize}
            children={header.label}
          />
        ))}
      </TableRow>
    </TableHeader>
  );
}
