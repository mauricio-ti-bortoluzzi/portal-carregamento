import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "./ui/button";
import React from "react";
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

type ButtonVariants = VariantProps<typeof buttonVariants>;

type NewOpDialogProps = {
  id: string;
  header: {
    title: string;
    description?: string;
  };
  trigger: {
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    label: string;
  };
  children: React.ReactElement;
  footer?: {
    confirm?: string;
    cancel?: string;
  };
};

export default function FormDialog({
  id,
  children,
  trigger,
  header,
  footer,
}: NewOpDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={trigger.variant} size={trigger.size}>
          <span>{trigger.label}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <span>{header.title}</span>
          </DialogTitle>
          {header.description && (
            <DialogDescription asChild>
              <span>{header.description}</span>
            </DialogDescription>
          )}
        </DialogHeader>
        {React.cloneElement(children as React.ReactElement<{ id?: string }>, {
          id,
        })}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">{footer?.cancel || "Cancelar"}</Button>
          </DialogClose>
          <Button form={id} type="submit">
            {footer?.confirm || "Enviar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
