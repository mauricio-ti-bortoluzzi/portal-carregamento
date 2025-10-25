import React, { useState } from "react";
import { Table } from "@/components/ui/table";
import { ExpandableTableProps } from "./type";
import ExpandableTableHeader from "./components/header";
import ExpandableTableBody from "./components/body";

export default function ExpandableTable({
  data,
  select = false,
  selection,
  setSelection,
}: ExpandableTableProps) {
  return (
    <Table>
      <ExpandableTableHeader headers={data.headers} select={select} />
      <ExpandableTableBody
        selection={selection}
        setSelection={setSelection}
        rows={data.rows}
        select={select}
      />
    </Table>
  );
}
