import React, { ReactNode } from "react";
import { RowProps, SubtableRowProps } from "../type";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import SelectCell from "./select-cell";
import clsx from "clsx";

interface MainRowProps {
  row: RowProps;
  hasSubtable: boolean;
  selection: {
    toggleRowSelection?: (
      rowId: string,
      subtableRows?: SubtableRowProps[]
    ) => void;
    checked: boolean;
    partial: boolean;
  };
  open: {
    isRowOpen: boolean;
    toggleRowOpen: (code: string) => void;
  };
  options?: ReactNode;
}

export default function MainRow({
  row,
  hasSubtable,
  selection,
  open,
  options,
}: MainRowProps) {
  const rowId = String(row.cells[0].value);

  return (
    <TableRow
      className={`
        ${selection.checked && "!bg-blue-100"}
        ${selection.partial && "!bg-amber-100"}
      `}
    >
      <SelectCell selection={selection} row={row} />
      {row.cells.map((cell, index) => (
        <TableCell
          key={`${rowId}-${cell.value}-${index}`}
          className="align"
          colSpan={cell.colSize}
        >
          <div
            className={clsx(
              "flex",
              "items-center",
              "gap-2",
              cell.align == "start" && "justify-start",
              cell.align == "end" && "justify-end"
            )}
          >
            <span className="mr-2">{cell.value}</span>
            {renderExpandButton(index, row)}
            {renderOptions(index, row)}
          </div>
        </TableCell>
      ))}
    </TableRow>
  );

  function renderExpandButton(index: number, row: RowProps) {
    if (!hasSubtable || index !== row.cells.length - 1) return null;

    return (
      <Button
        onClick={() => open.toggleRowOpen(rowId)}
        variant="ghost"
        size="auto"
      >
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            open.isRowOpen && "rotate-180"
          }`}
        />
      </Button>
    );
  }

  function renderOptions(index: number, row: RowProps) {
    if (!options || index !== row.cells.length - 1) return null;

    return (
      <Button variant="ghost" size="auto">
        <EllipsisVertical
          className={`h-5 w-5 transition-transform ${
            open.isRowOpen && "rotate-180"
          }`}
        />
      </Button>
    );
  }
}
