import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Table } from "@/components/ui/table";
import ExpandableTableHeader from "./components/header";
import ExpandableTableBody from "./components/body";
import { SelectionState, TableProps } from "./type";

export type ExpandableTableProps = {
  data: TableProps;
  select?: boolean;
  selection?: SelectionState;
  setSelection?: Dispatch<SetStateAction<SelectionState>>;
  options?: ReactNode;
};

export default function ExpandableTable({
  data,
  select = false,
  selection,
  setSelection,
  options,
}: ExpandableTableProps) {
  return (
    <Table>
      <ExpandableTableHeader headers={data.headers} />
      <ExpandableTableBody
        selection={selection}
        setSelection={setSelection}
        rows={data.rows}
        select={select}
        options={options}
      />
    </Table>
  );
}
