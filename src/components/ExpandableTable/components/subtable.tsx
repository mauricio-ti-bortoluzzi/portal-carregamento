import { TableCell, TableRow } from "@/components/ui/table";
import { SubtableRowProps, SubtableProps } from "../type";
import { useId } from "react";

type SelectionState = {
  [rowId: string]: {
    checked: boolean;
    partial: boolean;
    subRows: { [subRowId: string]: boolean };
  };
};

export default function ExpandableTableSubtable({
  subtable,
  select,
  rowId,
  selection,
  toggleSubRow,
}: {
  subtable: SubtableProps;
  select?: boolean;
  rowId: string;
  selection?: SelectionState[string];
  toggleSubRow?: (
    rowId: string,
    subRowId: string,
    subtableRows: SubtableRowProps[]
  ) => void;
}) {
  const key = useId();

  return (
    <>
      <TableRow
        className={`
          text-base
          font-semibold
          bg-muted 
          ${selection?.checked && "!bg-blue-50"}
        `}
      >
        {select && <TableCell className="text-center">X</TableCell>}
        {subtable.headers.map((header, i) => {
          return (
            <TableCell key={`${key}-${i}`} colSpan={header.colSize}>
              {header.label}
            </TableCell>
          );
        })}
      </TableRow>

      {subtable.rows.map((row, i) => {
        return (
          <TableRow
            key={`${key}-${i}-sub`}
            className={`
            bg-muted
            ${selection?.subRows[row.cells[0].value] && "!bg-blue-50"}  
          `}
          >
            {select && (
              <TableCell className="text-center">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selection?.subRows[row.cells[0].value] ?? false}
                  onChange={
                    toggleSubRow
                      ? () =>
                          toggleSubRow(
                            rowId,
                            String(row.cells[0].value),
                            subtable.rows
                          )
                      : () => {}
                  }
                />
              </TableCell>
            )}
            {row.cells.map((cell, i) => {
              return (
                <TableCell key={`${key}-${i}-row`} colSpan={cell.colSize}>
                  {cell.value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </>
  );
}
