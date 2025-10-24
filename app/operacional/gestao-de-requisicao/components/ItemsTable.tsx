import invoices, { DataType } from "../data";
import ExpandableTable from "@/components/ExpandableTable";
import { TableSchema } from "@/components/ExpandableTable/type";

export default function ItemsTable() {
  return (
    <ExpandableTable data={formatInvoicesToTable(invoices)} select={true} />
  );
}

function formatInvoicesToTable(invoices: DataType[]): TableSchema {
  const headers = [
    {
      label: "Código",
      colSize: 1,
      align: "start" as "start" | "end",
    },
    {
      label: "Item",
      colSize: 1,
      align: "start" as "start" | "end",
    },
    {
      label: "Saldo",
      colSize: 2,
      align: "end" as "start" | "end",
    },
  ];

  const subheaders = [
    {
      label: "Nº pedido",
      colSize: 1,
    },
    {
      label: "Cliente",
      colSize: 1,
    },
    {
      label: "Volume",
      colSize: 1,
    },
    {
      label: "Empresa",
      colSize: 1,
    },
  ];

  return {
    headers,
    rows: invoices.map((invoice) => ({
      cells: [
        {
          value: invoice.itemCode,
          colSize: headers[0].colSize,
          align: headers[0].align as "start" | "end",
        },
        {
          value: invoice.item,
          colSize: headers[1].colSize,
          align: headers[1].align as "start" | "end",
        },
        {
          value: invoice.balance.toFixed(2),
          colSize: headers[2].colSize,
          align: headers[2].align as "start" | "end",
        },
      ],
      subtable: {
        headers: subheaders,
        rows: invoice.orders.map((order) => ({
          cells: [
            {
              value: order.code,
              colSize: subheaders[0].colSize,
            },
            {
              value: order.client,
              colSize: subheaders[1].colSize,
            },
            {
              value: order.volume.toFixed(2),
              colSize: subheaders[2].colSize,
            },
            {
              value: order.companyName,
              colSize: subheaders[3].colSize,
            },
          ],
        })),
      },
    })),
  };
}
