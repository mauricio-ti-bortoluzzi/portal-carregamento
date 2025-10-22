import { TableCell, TableRow } from "@/components/ui/table";
import { DataType } from "../data";

type ExpandedRowGroupProps = {
  orders: DataType["orders"];
};

export default function ExpandedRowGroup({ orders }: ExpandedRowGroupProps) {
  return (
    <>
      <TableRow className="bg-muted font-medium text-base">
        <TableCell className="text-center">X</TableCell>
        <TableCell>Pedido</TableCell>
        <TableCell>Cliente</TableCell>
        <TableCell>Volume</TableCell>
        <TableCell>Empresa</TableCell>
      </TableRow>

      {orders.map((order) => (
        <TableRow key={order.code} className="bg-muted/70">
          <TableCell className="text-center">
            <input type="checkbox" className="w-4 h-4" />
          </TableCell>
          <TableCell>{order.code}</TableCell>
          <TableCell>{order.client}</TableCell>
          <TableCell>{order.volume}</TableCell>
          <TableCell>{order.companyName}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
