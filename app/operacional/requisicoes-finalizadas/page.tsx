"use client";

import { DashboardLayout } from "@/components/Layout";
import HeaderActions from "../components/HeaderActions";
import ExpandableTable from "@/components/ExpandableTable";
import data, { RequestType } from "./data";
import { useState } from "react";
import { SelectionState, TableProps } from "@/components/ExpandableTable/type";
import { FilterProps, filterSchema, newOpSchema } from "./schema";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CustomForm, FormFieldsProps } from "@/components/Form";

export default function RequisitionPage() {
  const [selection, setSelection] = useState<SelectionState>({});

  function handleSubmit(data: FilterProps) {
    console.log(data);
  }

  return (
    <DashboardLayout number={1} title="Gestão de Requisição">
      <HeaderActions
        fields={getFormFields()}
        schema={filterSchema}
        handleSubmit={handleSubmit}
      />
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

function getFormFields() {
  const fields: FormFieldsProps = [
    {
      fieldtype: "input",
      type: "number",
      name: "OPNumber",
      label: "Nº da OP",
      placeholder: "10010",
      direction: "horizontal",
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

function Options() {
  return (
    <>
      <NewOpDialog />
    </>
  );
}

function NewOpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <span>Adicionar OP</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <span>Adicionar OP</span>
          </DialogTitle>
          <DialogDescription asChild>
            <span>Preencha os campos abaixo</span>
          </DialogDescription>
        </DialogHeader>
        <CustomForm
          id="new-op-form"
          fields={getNewOpFormFields()}
          handleSubmit={() => {}}
          schema={newOpSchema}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button form="new-op-form" type="submit">
            Adicionar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function getNewOpFormFields() {
  const newOpFormFields: FormFieldsProps = [
    {
      fieldtype: "select",
      label: "Unidade",
      name: "unit",
      direction: "horizontal",
      values: [
        {
          value: "2",
          label: "Silo Xxê.",
        },
        {
          value: "3",
          label: "Ab. Luz",
        },
      ],
    },
    {
      fieldtype: "input",
      type: "number",
      name: "op",
      label: "Nº da OP",
      placeholder: "10010",
      direction: "horizontal",
    },
    {
      fieldtype: "input",
      type: "number",
      name: "volume",
      label: "Volume",
      step: "0.01",
      placeholder: "10010",
      direction: "horizontal",
    },
  ];

  return newOpFormFields;
}
