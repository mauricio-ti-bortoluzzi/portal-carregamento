import React from "react";
import { TableCell } from "@/components/ui/table";
import { RowProps, SubtableRowProps } from "../type";

interface SelectCellProps {
  row: RowProps;
  selection: {
    toggleRowSelection?: (
      rowId: string,
      subtableRows?: SubtableRowProps[]
    ) => void;
    checked: boolean;
    partial: boolean;
  };
}

export default function SelectCell({ row, selection }: SelectCellProps) {
  const rowId = String(row.cells[0].value);

  const handleClick = () => {
    if (selection.toggleRowSelection) {
      selection.toggleRowSelection(rowId, row.subtable?.rows);
    }
  };

  return (
    <TableCell className="text-center" onClick={handleClick}>
      <input
        type="checkbox"
        className="w-4 h-4"
        checked={selection.checked}
        ref={(el) => {
          if (el) el.indeterminate = selection.partial;
        }}
        readOnly
      />
    </TableCell>
  );
}
