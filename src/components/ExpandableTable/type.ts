export type SubtableRowProps = {
  cells: { value: string | number; colSize: number }[];
};

export type SubtableHeaderProps = { label: string; colSize: number };

export type SubtableProps = {
  headers: SubtableHeaderProps[];
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

export type SelectionState = {
  [rowId: string]: {
    checked: boolean;
    partial: boolean;
    subRows: { [subRowId: string]: boolean };
  };
};
