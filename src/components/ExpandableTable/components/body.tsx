import React, { useState } from "react";
import { RowSchema, SubtableRowSchema } from "../type";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ExpandableTableSubtable from "./subtable";

type SelectionState = {
  [rowId: string]: {
    checked: boolean;
    partial: boolean;
    subRows: { [subRowId: string]: boolean };
  };
};

export default function ExpandableTableBody({
  rows,
  select = false,
}: {
  rows: RowSchema[];
  select: boolean;
}) {
  const [openRow, setOpenRow] = useState<string | null>(null);
  const [selection, setSelection] = useState<SelectionState>({});

  console.log(JSON.stringify(selection, null, 2));

  function toggleOpenRow(code: string) {
    setOpenRow((prev) => (prev === code ? null : code));
  }

  const toggleRow = (rowId: string, subtableRows?: SubtableRowSchema[]) => {
    setSelection((prev) => {
      const prevRow = prev[rowId] || {
        checked: false,
        partial: false,
        subRows: {},
      };
      const newChecked = !prevRow.checked;

      // Atualiza todos subRows se tiver subtable
      const newSubRows: { [key: string]: boolean } = {};
      if (subtableRows) {
        subtableRows.forEach((subRow) => {
          newSubRows[subRow.cells[0].value] = newChecked;
        });
      }

      return {
        ...prev,
        [rowId]: {
          checked: newChecked,
          partial: false,
          subRows: newSubRows,
        },
      };
    });
  };

  const toggleSubRow = (
    rowId: string,
    subRowId: string,
    subtableRows?: SubtableRowSchema[]
  ) => {
    setSelection((prev) => {
      const prevRow = prev[rowId] || {
        checked: false,
        partial: false,
        subRows: {},
      };
      const newSubRows = {
        ...prevRow.subRows,
        [subRowId]: !prevRow.subRows[subRowId],
      };

      const allSelected =
        subtableRows?.every((subRow) => newSubRows[subRow.cells[0].value]) ??
        false;
      const noneSelected =
        subtableRows?.every((subRow) => !newSubRows[subRow.cells[0].value]) ??
        true;

      return {
        ...prev,
        [rowId]: {
          checked: allSelected,
          partial: !allSelected && !noneSelected,
          subRows: newSubRows,
        },
      };
    });
  };

  return (
    <TableBody>
      {rows.map((row) => {
        const isOpenRow = openRow === row.cells[0].value;

        return (
          <React.Fragment key={row.cells[0].value}>
            <MainRow
              row={row}
              select={select}
              haveSubtable={Boolean(row.subtable)}
              toggleRow={toggleRow}
              checkedRow={selection[row.cells[0].value]?.checked}
              partialRow={selection[row.cells[0].value]?.partial}
              isOpenRow={isOpenRow}
              toggleOpenRow={toggleOpenRow}
            />
            {row.subtable && isOpenRow && (
              <ExpandableTableSubtable
                subtable={row.subtable}
                select={select}
                rowId={String(row.cells[0].value)}
                selection={selection[row.cells[0].value]}
                toggleSubRow={toggleSubRow}
              />
            )}
          </React.Fragment>
        );
      })}
    </TableBody>
  );
}

function MainRow({
  row,
  select,
  haveSubtable,
  toggleRow,
  checkedRow,
  partialRow,
  isOpenRow,
  toggleOpenRow,
}: {
  row: RowSchema;
  select: boolean;
  haveSubtable: boolean;
  toggleRow: (rowId: string, subtableRows?: SubtableRowSchema[]) => void;
  checkedRow: boolean;
  partialRow: boolean;
  isOpenRow: boolean;
  toggleOpenRow: (arg0: string) => void;
}) {
  return (
    <TableRow
      className={`${checkedRow && "!bg-blue-100"} ${
        partialRow && "!bg-amber-100"
      }`}
    >
      {select && (
        <TableCell
          className="text-center"
          onClick={() =>
            toggleRow(String(row.cells[0].value), row.subtable?.rows)
          }
        >
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={checkedRow ?? false}
            ref={(el) => {
              if (el) el.indeterminate = partialRow ?? false;
            }}
            readOnly
          />
        </TableCell>
      )}
      {row.cells.map((cell, i) => (
        <TableCell key={cell.value} className="align" colSpan={cell.colSize}>
          <div className={`flex items-center justify-${cell.align}`}>
            <span className="mr-2" children={cell.value} />
            {haveSubtable && i === row.cells.length - 1 && (
              <Button
                onClick={() => toggleOpenRow(String(row.cells[0].value))}
                variant="ghost"
                size="auto"
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isOpenRow && "rotate-180"
                  }`}
                />
              </Button>
            )}
          </div>
        </TableCell>
      ))}
    </TableRow>
  );
}
