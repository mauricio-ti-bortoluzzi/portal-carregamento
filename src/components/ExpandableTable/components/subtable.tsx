import { TableCell, TableRow } from "@/components/ui/table";
import { SubtableRowProps, SubtableProps } from "../type";

type SelectionState = {
  [rowId: string]: {
    checked: boolean; // linha principal totalmente selecionada
    partial: boolean; // linha principal parcialmente selecionada
    subRows: { [subRowId: string]: boolean }; // sublinhas selecionadas
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
        {subtable.headers.map((header) => (
          <TableCell key={header.label} colSpan={header.colSize}>
            {header.label}
          </TableCell>
        ))}
      </TableRow>

      {subtable.rows.map((row) => (
        <TableRow
          key={row.cells[0].value}
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
                        toggleSubRow(rowId, row.cells[0].value, subtable.rows)
                    : () => {}
                }
              />
            </TableCell>
          )}
          {row.cells.map((cell) => (
            <TableCell key={cell.value} colSpan={cell.colSize}>
              {cell.value}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
