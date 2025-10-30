"use client";

import { DashboardLayout } from "@/components/Layout";
import BaseTableHeader from "@/components/BaseTableHeader";
import ExpandableTable from "@/components/ExpandableTable";
import data, { formatInvoicesToTable } from "./data";
import { useState } from "react";
import { SelectionState } from "@/components/ExpandableTable/type";
import { filterSchema, newOpSchema } from "./schema";
import { CustomForm } from "@/components/Form";
import FormDialog from "@/components/FormDialog";
import {
  getFilterFormFields,
  getNewOpFormFields,
  handleFilterSubmit,
  handleNewOpFormSubmit,
} from "./form";

export default function RequisitionPage() {
  const [selection, setSelection] = useState<SelectionState>({});

  return (
    <DashboardLayout number={2} title="Gestão de Produção">
      <TableHeader />
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

function TableHeader() {
  return (
    <BaseTableHeader
      filter={{
        fields: getFilterFormFields(),
        schema: filterSchema,
        handleSubmit: handleFilterSubmit,
      }}
    />
  );
}

function Options({ dataId }: { dataId?: string }) {
  return (
    <FormDialog
      id="new-op-forms"
      trigger={{
        label: "Adicionar OP",
        variant: "secondary",
      }}
      header={{
        title: "Adicionar OP",
        description: "Preencha os campos abaixo",
      }}
      footer={{
        confirm: "Adicionar",
      }}
    >
      <CustomForm
        fields={getNewOpFormFields(dataId || "")}
        handleSubmit={handleNewOpFormSubmit}
        schema={newOpSchema}
      />
    </FormDialog>
  );
}
