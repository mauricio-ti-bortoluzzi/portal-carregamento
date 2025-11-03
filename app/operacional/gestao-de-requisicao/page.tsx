"use client";

import { DashboardLayout } from "@/components/Layout";
import ExpandableTable from "@/components/ExpandableTable";
import invoices, { formatInvoicesToTable } from "./data";
import { useState } from "react";
import { SelectionState } from "@/components/ExpandableTable/type";
import { filterSchema } from "./schema";
import { Button } from "@/components/ui/button";
import { getFormFields } from "./form";
import BaseTableHeader from "@/components/BaseTableHeader";

export default function RequisitionPage() {
  const [selection, setSelection] = useState<SelectionState>({});

  return (
    <DashboardLayout number={0} title="Gestão de Requisição">
      <TableHeader />
      <ExpandableTable
        data={formatInvoicesToTable(invoices)}
        select={true}
        selection={selection}
        setSelection={setSelection}
      />
    </DashboardLayout>
  );
}

function TableHeader() {
  // data: FilterProps
  function handleSubmit() {}

  return (
    <BaseTableHeader
      filter={{
        fields: getFormFields(),
        schema: filterSchema,
        handleSubmit: handleSubmit,
      }}
    >
      <Button>
        <span>Gerar Requisição</span>
      </Button>
    </BaseTableHeader>
  );
}
