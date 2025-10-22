import { useState } from "react";
import invoices, { DataType } from "../data";
import { Table } from "@/components/ui/table";
import {
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ItemRow from "./ItemRow";

export default function ItemsTable() {
  const [openRow, setOpenRow] = useState<string | null>(null);

  function toggleOpenRow(row: DataType) {
    setOpenRow((prev) => (prev === row.itemCode ? null : row.itemCode));
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px] text-center">Selecionar</TableHead>
          <TableHead>Código do Item</TableHead>
          <TableHead>Item</TableHead>
          <TableHead className="text-end" colSpan={2}>
            Saldo / Previsão
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((row) => (
          <ItemRow
            key={row.itemCode}
            row={row}
            isOpen={openRow === row.itemCode}
            onToggle={() => toggleOpenRow(row)}
          />
        ))}
      </TableBody>
    </Table>
  );
}
