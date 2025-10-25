"use client";

import { DashboardLayout } from "@/components/Layout";
import HeaderActions from "./components/HeaderActions";
import ItemsTable from "./components/ItemsTable";

export default function RequisitionPage() {
  return (
    <DashboardLayout number={0} title="Gestão de Requisição">
      <ItemsTable />
    </DashboardLayout>
  );
}
