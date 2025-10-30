import { Button } from "@/components/ui/button";
import { FilterDialog } from "@/components/FilterDialog";
import { FormFieldsProps } from "@/components/Form";
import z from "zod";

type HeaderActionsProps<T> = {
  schema: T;
  fields: FormFieldsProps;
  handleSubmit: (data: z.infer<T>) => void;
};

export default function HeaderActions<T extends z.ZodType>({
  fields,
  schema,
  handleSubmit,
}: HeaderActionsProps<T>) {
  return (
    <div className="flex justify-between items-end mb-4">
      <h1 className="text-lg font-semibold">Tabela</h1>
      <div className="flex gap-2">
        <FilterButton
          fields={fields}
          schema={schema}
          handleSubmit={handleSubmit}
        />
        <Button>Gerar Ordem</Button>
      </div>
    </div>
  );
}

function FilterButton<T extends z.ZodType>({
  fields,
  schema,
  handleSubmit,
}: HeaderActionsProps<T>) {
  return (
    <FilterDialog fields={fields} handleSubmit={handleSubmit} schema={schema}>
      <Button variant="secondary">Filtrar</Button>
    </FilterDialog>
  );
}
