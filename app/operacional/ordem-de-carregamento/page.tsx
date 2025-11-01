"use client";

import { DashboardLayout } from "@/components/Layout";
import BaseTableHeader from "@/components/BaseTableHeader";
import ExpandableTable from "@/components/ExpandableTable";
import data, { formatInvoicesToTable } from "./data";
import { useState } from "react";
import { SelectionState } from "@/components/ExpandableTable/type";
import { filterSchema, newOrderSchema } from "./schema";
import {
  getFilterFormFields,
  getNewOrderFormFields,
  handleFilterSubmit,
  handleNewOrderFormSubmit,
} from "./form";
import { Button } from "@/components/ui/button";
import FormDialog from "@/components/FormDialog";
import { CustomForm } from "@/components/Form";

export default function RequisitionPage() {
  const [selection, setSelection] = useState<SelectionState>({});

  return (
    <DashboardLayout number={3} title="Requisições Finalizadas">
      <TableHeader />
      <ExpandableTable
        data={formatInvoicesToTable(data)}
        select={true}
        selection={selection}
        setSelection={setSelection}
      />
    </DashboardLayout>
  );
}

function TableHeader() {
  return (
    <BaseTableHeader
      filter={{
        fields: getFilterFormFields(),
        schema: filterSchema,
        handleSubmit: handleFilterSubmit,
      }}
    >
      <NewOrder />
    </BaseTableHeader>
  );
}

function NewOrder() {
  return (
    <FormDialog
      id="new-order-forms"
      trigger={{
        label: "Nova Ordem",
      }}
      header={{
        title: "Nova Ordem",
        description: "Preencha os campos abaixo.",
      }}
      footer={{
        confirm: "Criar",
      }}
    >
      <CustomForm
        fields={getNewOrderFormFields()}
        handleSubmit={handleNewOrderFormSubmit}
        schema={newOrderSchema}
      />
    </FormDialog>
  );
}
