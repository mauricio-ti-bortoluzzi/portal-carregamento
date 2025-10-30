import { zodResolver } from "@hookform/resolvers/zod";
import { FormHTMLAttributes } from "react";
import { FormProvider, useForm } from "react-hook-form";
import z, { ZodObject } from "zod";
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

type CustomFormProps<T extends z.ZodType<any, any, any>> =
  FormHTMLAttributes<HTMLFormElement> & {
    schema: T;
    handleSubmit: (data: z.infer<T>) => void;
    fields: FormFieldsProps;
  };

export function CustomForm<T extends z.ZodType<any, any, any>>({
  schema,
  handleSubmit,
  fields,
  ...props
}: CustomFormProps<T>) {
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
              default:
                return null;
            }
          })}
        </div>
      </form>
    </FormProvider>
  );
}
