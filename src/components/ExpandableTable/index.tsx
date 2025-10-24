import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { ExpandableTableProps, RowSchema, SubtableSchema } from "./type";
import ExpandableTableHeader from "./components/header";
import ExpandableTableBody from "./components/body";

export default function ExpandableTable({
  data,
  select = false,
}: ExpandableTableProps) {
  return (
    <Table>
      <ExpandableTableHeader headers={data.headers} select={select} />
      <ExpandableTableBody rows={data.rows} select={select} />
    </Table>
  );
}
