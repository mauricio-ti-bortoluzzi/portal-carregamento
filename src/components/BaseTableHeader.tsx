import { FilterButton } from "@/components/FilterDialog";
import { FormFieldsProps } from "@/components/Form";
import z from "zod";

type TableHeaderProps<T> = {
  children?: React.ReactElement;
  filter: {
    schema: T;
    fields: FormFieldsProps;
    handleSubmit: (data: z.infer<T>) => void;
  };
};

export default function BaseTableHeader<T extends z.ZodType>({
  children,
  filter,
}: TableHeaderProps<T>) {
  return (
    <div className="flex justify-between items-end mb-4">
      <h1 className="text-lg font-semibold">Tabela</h1>
      <div className="flex gap-2">
        <FilterButton
          fields={filter.fields}
          schema={filter.schema}
          handleSubmit={filter.handleSubmit}
        />
        {children || null}
      </div>
    </div>
  );
}
