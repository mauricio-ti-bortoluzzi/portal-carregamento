import { Dispatch, SetStateAction } from "react";

export type SubtableRowProps = {
  cells: { value: any; colSize: number }[];
};

export type SubtableProps = {
  headers: { label: string; colSize: number }[];
  rows: SubtableRowProps[];
};

export type RowProps = {
  cells: { value: string | number; colSize: number; align: "start" | "end" }[];
  subtable?: SubtableProps;
};

export type HeaderProps = {
  label: string;
  colSize: number;
  align: "start" | "end";
};

export type TableProps = {
  headers: HeaderProps[];
  rows: RowProps[];
};

export type ExpandableTableProps = {
  data: TableProps;
  select?: boolean;
  selection?: SelectionState;
  setSelection?: Dispatch<SetStateAction<SelectionState>>;
};

export type SelectionState = {
  [rowId: string]: {
    checked: boolean;
    partial: boolean;
    subRows: { [subRowId: string]: boolean };
  };
};
