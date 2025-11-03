import { zodResolver } from "@hookform/resolvers/zod";
import { FormHTMLAttributes, useId } from "react";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomFormProps<T extends z.ZodType<any, any, any>> =
  FormHTMLAttributes<HTMLFormElement> & {
    schema: T;
    handleSubmit: (data: z.infer<T>) => void;
    fields: FormFieldsProps;
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            const key = useId();
            switch (field.fieldtype) {
              case "input":
                return <CustomInput key={key} {...field} />;
              case "select":
                return <CustomSelect key={key} {...field} />;
              default:
                return null;
            }
          })}
        </div>
      </form>
    </FormProvider>
  );
}
