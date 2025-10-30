"use client";

import { DashboardLayout } from "@/components/Layout";
import HeaderActions from "../components/HeaderActions";
import ExpandableTable from "@/components/ExpandableTable";
import invoices, { DataType } from "./data";
import { useState } from "react";
import { SelectionState, TableProps } from "@/components/ExpandableTable/type";
import { FilterProps, filterSchema } from "./schema";
import { FormFieldsProps } from "@/components/Form";

export default function RequisitionPage() {
  const [selection, setSelection] = useState<SelectionState>({});

  function handleSubmit(data: FilterProps) {
    console.log(data);
  }

  return (
    <DashboardLayout number={0} title="Gestão de Requisição">
      <HeaderActions
        fields={getFormFields()}
        schema={filterSchema}
        handleSubmit={handleSubmit}
      />
      <ExpandableTable
        data={formatInvoicesToTable(invoices)}
        select={true}
        selection={selection}
        setSelection={setSelection}
      />
    </DashboardLayout>
  );
}

function formatInvoicesToTable(invoices: DataType[]): TableProps {
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

function getFormFields() {
  const fields: FormFieldsProps = [
    {
      fieldtype: "input",
      type: "date",
      name: "estimatedDeliveryDate",
      label: "Previsão de entrega",
      placeholder: "22-11-2025",
      direction: "horizontal",
    },
    {
      fieldtype: "select",
      label: "Cultivar",
      name: "product",
      direction: "horizontal",
      values: [
        {
          value: "001",
          label: "Sem 610 IPRO",
        },
        {
          value: "002",
          label: "Sem O580",
        },
      ],
    },
    {
      fieldtype: "select",
      label: "Unidade",
      name: "unit",
      direction: "horizontal",
      values: [
        {
          value: "1",
          label: "Silo Xxê.",
        },
        {
          value: "2",
          label: "Ab. Luz",
        },
      ],
    },
  ];

  return fields;
}
