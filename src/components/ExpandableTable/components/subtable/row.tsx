import { TableCell, TableRow } from "@/components/ui/table";
import { SubtableRowProps } from "../../type";
import { boolean } from "zod";

interface SubtableRowComponentProps {
  row: SubtableRowProps;
  selection: {
    toggleRowSelection: () => void;
    checked: boolean;
  };
}

export function SubtableRow({ row, selection }: SubtableRowComponentProps) {
  return (
    <TableRow
      className={`
        bg-muted
        ${selection.checked && "!bg-blue-50"}  
      `}
    >
      <TableCell className="text-center">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={selection.checked ?? false}
          onChange={selection.toggleRowSelection}
        />
      </TableCell>
      {row.cells.map((cell) => (
        <TableCell key={cell.value} colSpan={cell.colSize}>
          {cell.value}
        </TableCell>
      ))}
    </TableRow>
  );
}
