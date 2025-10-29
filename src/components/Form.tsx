import { zodResolver } from "@hookform/resolvers/zod";
import { FormHTMLAttributes } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ZodObject } from "zod";
import {
  CustomInput,
  CustomInputProps,
  CustomSelect,
  CustomSelectProps,
} from "@/components/Input";

type FormInputFieldProps = CustomInputProps & {
  fieldtype: "input";
};
type FormSelectFieldProps = CustomSelectProps & {
  fieldtype: "select";
};
export type FormFieldsProps = (FormInputFieldProps | FormSelectFieldProps)[];

type CustomFormProps = FormHTMLAttributes<HTMLFormElement> & {
  schema: ZodObject;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: (data: any) => void;
  fields: FormFieldsProps;
};

export function CustomForm({
  schema,
  handleSubmit,
  fields,
  ...props
}: CustomFormProps) {
  const methods = useForm({
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(handleSubmit)}>
        <div className="space-y-4">
          {fields.map((field) => {
            switch (field.fieldtype) {
              case "input":
                return <CustomInput key={field.name} {...field} />;
              case "select":
                return <CustomSelect key={field.name} {...field} />;
            }
          })}
        </div>
      </form>
    </FormProvider>
  );
}
