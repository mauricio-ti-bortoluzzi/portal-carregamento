"use client";

import { DashboardLayout } from "@/components/Layout";
import HeaderActions from "../components/HeaderActions";
import ExpandableTable from "@/components/ExpandableTable";
import data, { RequestType } from "./data";
import { useState } from "react";
import { SelectionState, TableProps } from "@/components/ExpandableTable/type";
import { FilterProps } from "./schema";
import { Button } from "@/components/ui/button";

export default function RequisitionPage() {
  const [selection, setSelection] = useState<SelectionState>({});

  function handleSubmit(data: FilterProps) {
    console.log(data);
  }

  return (
    <DashboardLayout number={1} title="Gestão de Requisição">
      <HeaderActions handleSubmit={handleSubmit} />
      <ExpandableTable
        data={formatInvoicesToTable(data)}
        select={true}
        selection={selection}
        setSelection={setSelection}
        options={<Options />}
      />
    </DashboardLayout>
  );
}

function formatInvoicesToTable(data: RequestType[]): TableProps {
  const headers = [
    {
      label: "Requisição",
      colSize: 1,
      align: "start" as "start" | "end",
    },
    {
      label: "Código do Item",
      colSize: 1,
      align: "start" as "start" | "end",
    },
    {
      label: "Item",
      colSize: 1,
      align: "start" as "start" | "end",
    },
    {
      label: "Volume",
      colSize: 1,
      align: "start" as "start" | "end",
    },
    {
      label: "Status",
      colSize: 1,
      align: "end" as "start" | "end",
    },
  ];

  const subheaders = [
    {
      label: "OP",
      colSize: 1,
    },
    {
      label: "Volume",
      colSize: 4,
    },
  ];

  return {
    headers,
    rows: data.map((request) => ({
      cells: [
        {
          value: request.request,
          colSize: headers[0].colSize,
          align: headers[0].align as "start" | "end",
        },
        {
          value: request.itemCode,
          colSize: headers[1].colSize,
          align: headers[1].align as "start" | "end",
        },
        {
          value: request.item,
          colSize: headers[2].colSize,
          align: headers[2].align as "start" | "end",
        },
        {
          value: request.volume,
          colSize: headers[3].colSize,
          align: headers[3].align as "start" | "end",
        },
        {
          value: request.status,
          colSize: headers[4].colSize,
          align: headers[4].align as "start" | "end",
        },
      ],
      subtable: {
        headers: subheaders,
        rows: request.operations.map((operation) => ({
          cells: [
            {
              value: operation.code,
              colSize: subheaders[0].colSize,
            },
            {
              value: operation.volume,
              colSize: subheaders[1].colSize,
            },
          ],
        })),
      },
    })),
  };
}

function Options() {
  return (
    <>
      <Button>
        <span>Adicionar OP</span>
      </Button>
      <Button>
        <span>Adicionar OP</span>
      </Button>
    </>
  );
}
