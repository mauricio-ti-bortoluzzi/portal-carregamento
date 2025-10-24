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
import { ZodObject } from "zod";

type FilterDialogProps = {
  children: ReactNode;
  fields: FormFieldsProps;
  schema: ZodObject;
  handleSubmit: () => void;
};

export function FilterDialog({
  children,
  fields,
  schema,
  handleSubmit,
}: FilterDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild children={children} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle children="Filtro de Requisições" />
          <DialogDescription children="Selecione os campos para filtrar" />
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
