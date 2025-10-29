import SubtableHeader from "./header";
import { SubtableRow } from "./row";
import { SubtableProps as DataProps, SubtableRowProps } from "../../type";

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
  return (
    <>
      <SubtableHeader headers={data.headers} isChecked={selection?.checked} />
      {data.rows.map((row) => {
        const subRowId = row.cells[0].value;

        return (
          <SubtableRow
            key={subRowId}
            row={row}
            selection={{
              toggleRowSelection: () =>
                toggleSubRow(rowId, subRowId, data.rows),
              checked: selection?.subRows[subRowId] ?? false,
            }}
          />
        );
      })}
    </>
  );
}
