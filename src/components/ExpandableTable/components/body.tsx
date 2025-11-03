import React, { ReactElement, useId, useState } from "react";
import { RowProps, SelectionState } from "../type";
import { TableBody } from "@/components/ui/table";
import MainRow from "./main-row";
import ExpandableTableSubtable from "./subtable";
import { useSelection } from "../hooks/useSelection";

interface ExpandableTableBodyProps {
  rows: RowProps[];
  select?: boolean;
  selection?: SelectionState;
  setSelection?: React.Dispatch<React.SetStateAction<SelectionState>>;
  options?: ReactElement;
}

export default function ExpandableTableBody({
  rows,
  select = false,
  selection,
  setSelection,
  options,
}: ExpandableTableBodyProps) {
  const [openRow, setOpenRow] = useState<string | null>(null);
  const { toggleRowSelection, toggleSubRowSelection } = useSelection(
    selection,
    setSelection
  );

  const handleToggleRow = (actualCode: string) => {
    setOpenRow((previousCode) =>
      previousCode === actualCode ? null : actualCode
    );
  };

  return (
    <TableBody>
      {rows.map((row) => {
        const rowId = String(row.cells[0].value);
        const isRowOpen = openRow === rowId;
        const rowSelection = selection?.[rowId];

        const key = useId();

        return (
          <React.Fragment key={key}>
            <MainRow
              row={row}
              hasSubtable={Boolean(row.subtable)}
              selection={{
                toggleRowSelection,
                checked: rowSelection?.checked ?? false,
                partial: rowSelection?.partial ?? false,
              }}
              open={{
                isRowOpen: isRowOpen,
                toggleRowOpen: handleToggleRow,
              }}
              options={options}
            />
            {row.subtable && isRowOpen && (
              <ExpandableTableSubtable
                subtable={row.subtable}
                select={select}
                rowId={rowId}
                selection={rowSelection}
                toggleSubRow={toggleSubRowSelection}
              />
            )}
          </React.Fragment>
        );
      })}
    </TableBody>
  );
}
