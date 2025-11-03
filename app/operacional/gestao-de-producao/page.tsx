"use client";

import { DashboardLayout } from "@/components/Layout";
import BaseTableHeader from "@/components/BaseTableHeader";
import ExpandableTable from "@/components/ExpandableTable";
import data, { formatInvoicesToTable } from "./data";
import { useState } from "react";
import { SelectionState } from "@/components/ExpandableTable/type";
import { filterSchema } from "./schema";
import { getFilterFormFields, handleFilterSubmit } from "./form";
import { Button } from "@/components/ui/button";

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
      <Button>
        <span>Liberar para carregamento</span>
      </Button>
    </BaseTableHeader>
  );
}
