import { TableCell, TableRow } from "@/components/ui/table";
import { SubtableHeaderProps as DataProps } from "../../type";
import { useId } from "react";

interface SubtableHeaderProps {
  headers: DataProps[];
  isChecked?: boolean;
}

export default function SubtableHeader({
  headers,
  isChecked,
}: SubtableHeaderProps) {
  const key = useId();
  return (
    <TableRow
      className={`
        text-base
        font-semibold
        bg-muted 
        ${isChecked && "!bg-blue-50"}
      `}
    >
      <TableCell className="text-center">Selecionar</TableCell>
      {headers.map((header, i) => {
        return (
          <TableCell key={`${key}-${i}`} colSpan={header.colSize}>
            {header.label}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
