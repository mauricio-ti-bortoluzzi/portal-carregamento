import { Dispatch, SetStateAction } from "react";
import { SelectionState, SubtableRowProps } from "../type";

export function useSelection(
  selection?: SelectionState,
  setSelection?: Dispatch<SetStateAction<SelectionState>>
) {
  const toggleRowSelection = (
    rowId: string,
    subtableRows?: SubtableRowProps[]
  ) => {
    if (!selection || !setSelection) return;

    setSelection((previousSelection) => {
      const previousRowSelection = previousSelection[rowId] || {
        checked: false,
        partial: false,
        subRows: {},
      };
      const isRowSelected = !previousRowSelection.checked;

      const newSubRowsSelection =
        subtableRows?.reduce(
          (accumulator, row) => ({
            ...accumulator,
            [row.cells[0].value]: isRowSelected,
          }),
          {}
        ) || {};

      return {
        ...previousSelection,
        [rowId]: {
          checked: isRowSelected,
          partial: false,
          subRows: newSubRowsSelection,
        },
      };
    });
  };

  const toggleSubRowSelection = (
    rowId: string,
    subRowId: string,
    subtableRows?: SubtableRowProps[]
  ) => {
    if (!selection || !setSelection) return;

    setSelection((previousSelectedRows) => {
      const previousSelectedRow = previousSelectedRows[rowId] || {
        checked: false,
        partial: false,
        subRows: {},
      };

      const isSubRowsSelected = {
        ...previousSelectedRow.subRows,
        [subRowId]: !previousSelectedRow.subRows[subRowId],
      };

      const allSelected =
        subtableRows?.every((row) => isSubRowsSelected[row.cells[0].value]) ??
        false;
      const anySelected =
        subtableRows?.some((row) => isSubRowsSelected[row.cells[0].value]) ??
        false;

      return {
        ...previousSelectedRows,
        [rowId]: {
          checked: allSelected,
          partial: anySelected && !allSelected,
          subRows: isSubRowsSelected,
        },
      };
    });
  };

  return { toggleRowSelection, toggleSubRowSelection };
}
