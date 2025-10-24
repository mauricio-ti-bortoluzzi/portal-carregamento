import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HeaderSchema } from "../type";

export default function ExpandableTableHeader({
  headers,
  select,
}: {
  headers: HeaderSchema[];
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
