import React, { Dispatch, SetStateAction, useState } from "react";
import { RowProps, SelectionState, SubtableRowProps } from "../type";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ExpandableTableSubtable from "./subtable";

export default function ExpandableTableBody({
  rows,
  select = false,
  selection,
  setSelection,
}: {
  rows: RowProps[];
  select: boolean;
  selection?: SelectionState;
  setSelection?: Dispatch<SetStateAction<SelectionState>>;
}) {
  const [openRow, setOpenRow] = useState<string | null>(null);

  const toggleRow =
    selection &&
    setSelection &&
    ((rowId: string, subtableRows?: SubtableRowProps[]) => {
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
    });

  const toggleSubRow =
    selection &&
    setSelection &&
    ((rowId: string, subRowId: string, subtableRows?: SubtableRowProps[]) => {
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
    });

  function toggleOpenRow(code: string) {
    setOpenRow((prev) => (prev === code ? null : code));
  }

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
              checkedRow={
                selection ? selection[row.cells[0].value]?.checked : false
              }
              partialRow={
                selection ? selection[row.cells[0].value]?.partial : false
              }
              isOpenRow={isOpenRow}
              toggleOpenRow={toggleOpenRow}
            />
            {row.subtable && isOpenRow && (
              <ExpandableTableSubtable
                subtable={row.subtable}
                select={select}
                rowId={String(row.cells[0].value)}
                selection={selection && selection[row.cells[0].value]}
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
  row: RowProps;
  select: boolean;
  haveSubtable: boolean;
  toggleRow?: (rowId: string, subtableRows?: SubtableRowProps[]) => void;
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
          onClick={
            toggleRow
              ? () => toggleRow(String(row.cells[0].value), row.subtable?.rows)
              : () => {}
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
