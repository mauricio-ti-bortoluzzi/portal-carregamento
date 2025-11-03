import { TableCell, TableRow } from "@/components/ui/table";
import { SubtableRowProps } from "../../type";
import { useId } from "react";

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
      {row.cells.map((cell) => {
        const key = useId();
        return (
          <TableCell key={key} colSpan={cell.colSize}>
            {cell.value}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
