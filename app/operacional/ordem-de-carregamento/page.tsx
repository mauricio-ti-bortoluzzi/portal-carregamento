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
  getOptionsFormFields,
  handleFilterSubmit,
  handleNewOrderFormSubmit,
} from "./form";
import FormDialog from "@/components/FormDialog";
import { CustomForm } from "@/components/Form";
import { Button } from "@/components/ui/button";
import { hasTrueValue } from "@/lib/utils";

export default function RequisitionPage() {
  const [selection, setSelection] = useState<SelectionState>({});

  return (
    <DashboardLayout number={3} title="Ordem de Carregamento">
      <BaseTableHeader
        filter={{
          fields: getFilterFormFields(),
          schema: filterSchema,
          handleSubmit: handleFilterSubmit,
        }}
      >
        <Button disabled={!hasTrueValue(selection)}>
          <span>Gerar pré-nota</span>
        </Button>
      </BaseTableHeader>
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

function Options({ dataId }: { dataId?: string }) {
  return (
    <FormDialog
      id="new-order-forms"
      trigger={{
        label: "Incluir Lote",
        variant: "secondary",
      }}
      header={{
        title: "Incluir Lote",
        description: "Preencha os campos abaixo.",
      }}
      footer={{
        confirm: "Criar",
      }}
    >
      <CustomForm
        fields={getOptionsFormFields(dataId || "")}
        handleSubmit={handleNewOrderFormSubmit}
        schema={newOrderSchema}
      />
    </FormDialog>
  );
}
