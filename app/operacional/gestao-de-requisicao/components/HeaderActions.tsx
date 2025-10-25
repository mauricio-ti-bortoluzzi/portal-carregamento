import { Button } from "@/components/ui/button";
import { FilterDialog } from "@/components/FilterDialog";
import { FormFieldsProps } from "@/components/Form";
import { FilterProps, filterSchema } from "./schema";

type HeaderActionsProps = { handleSubmit: (arg0: FilterProps) => void };

export default function HeaderActions({ handleSubmit }: HeaderActionsProps) {
  return (
    <div className="flex justify-between items-end mb-4">
      <h1 className="text-lg font-semibold">Tabela</h1>
      <div className="flex gap-2">
        <FilterButton handleSubmit={handleSubmit} />
        <Button>Gerar Ordem</Button>
      </div>
    </div>
  );
}

function FilterButton({ handleSubmit }: HeaderActionsProps) {
  return (
    <FilterDialog
      fields={getFormFields()}
      handleSubmit={handleSubmit}
      schema={filterSchema}
    >
      <Button variant="secondary">Filtrar</Button>
    </FilterDialog>
  );
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
      label: "Região",
      name: "region",
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
