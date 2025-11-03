import SubtableHeader from "./header";
import { SubtableRow } from "./row";
import { SubtableProps as DataProps, SubtableRowProps } from "../../type";
import { useId } from "react";

export interface SubtableSelectionState {
  checked: boolean;
  partial: boolean;
  subRows: Record<string, boolean>;
}

type SubtableProps = {
  data: DataProps;
  rowId: string;
  selection?: SubtableSelectionState;
  toggleSubRow: (
    rowId: string,
    subRowId: string,
    subtableRows: SubtableRowProps[]
  ) => void;
};

export function Subtable({
  data,
  rowId,
  selection,
  toggleSubRow,
}: SubtableProps) {
  const key = useId();

  return (
    <>
      <SubtableHeader headers={data.headers} isChecked={selection?.checked} />
      {data.rows.map((row, i) => {
        const subRowId = row.cells[0].value;

        return (
          <SubtableRow
            key={`${key}-${i}`}
            row={row}
            selection={{
              toggleRowSelection: () =>
                toggleSubRow(rowId, String(subRowId), data.rows),
              checked: selection?.subRows[subRowId] ?? false,
            }}
          />
        );
      })}
    </>
  );
}
