import { CustomForm, FormFieldsProps } from "@/components/Form";
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
import { ReactNode } from "react";
import z, { ZodObject } from "zod";

type FilterDialogProps<T extends z.ZodType> = {
  children: ReactNode;
  fields: FormFieldsProps;
  schema: T;
  handleSubmit: (data: z.infer<T>) => void;
};

export function FilterDialog<T extends z.ZodType>({
  children,
  fields,
  schema,
  handleSubmit,
}: FilterDialogProps<T>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <span>Filtro de Requisições</span>
          </DialogTitle>
          <DialogDescription asChild>
            <span>Selecione os campos para filtrar</span>
          </DialogDescription>
        </DialogHeader>
        <CustomForm
          schema={schema}
          id="filter-form"
          handleSubmit={handleSubmit}
          className="space-y-4"
          fields={fields}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button variant="outline">Limpar</Button>
          <Button form="filter-form" type="submit">
            Filtrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
