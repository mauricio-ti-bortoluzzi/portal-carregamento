import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { ComponentProps, FormHTMLAttributes, ReactNode } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { ZodObject } from "zod";

type CustomInputProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export function CustomInput({ label, name, ...props }: CustomInputProps) {
  const { register, formState } = useFormContext();
  const error = formState.errors[name]?.message as string | undefined;

  const className = error && "border-red-500 focus-visible:border-red-400";

  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Input className={className} id={name} {...register(name)} {...props} />
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
}

type CustomFormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  schema: ZodObject;
  handleSubmit: (data: any) => void;
};

export function CustomForm({
  children,
  schema,
  handleSubmit,
  ...props
}: CustomFormProps) {
  const methods = useForm({
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(handleSubmit)}>
        <div className="space-y-4">{children}</div>
      </form>
    </FormProvider>
  );
}
