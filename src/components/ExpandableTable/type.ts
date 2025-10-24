export type SubtableRowSchema = {
  cells: { value: any; colSize: number }[];
};

export type SubtableSchema = {
  headers: { label: string; colSize: number }[];
  rows: SubtableRowSchema[];
};

export type RowSchema = {
  cells: { value: string | number; colSize: number; align: "start" | "end" }[];
  subtable?: SubtableSchema;
};

export type HeaderSchema = {
  label: string;
  colSize: number;
  align: "start" | "end";
};

export type TableSchema = {
  headers: HeaderSchema[];
  rows: RowSchema[];
};

export type ExpandableTableProps = {
  data: TableSchema;
  select?: boolean;
};
