import { ComponentProps } from "react";
import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export type CustomInputProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  direction?: "horizontal" | "vertical";
};
export function CustomInput({
  label,
  name,
  direction = "vertical",
  ...props
}: CustomInputProps) {
  const { register, formState } = useFormContext();
  const error = formState.errors[name]?.message as string | undefined;

  const containerClassname = cn(
    "flex gap-2",
    direction == "vertical" && "flex-col"
  );

  const selectWithErrorContainerClassname = cn(
    "flex flex-col gap-1",
    direction === "horizontal" && "w-1/2"
  );

  const inputClassname = cn(
    "w-full",
    error && "border-red-500 focus-visible:border-red-400"
  );

  const spanClassname = cn(`text-red-500 text-sm`, !error && "hidden");

  return (
    <>
      <div className={containerClassname}>
        <Label className="w-1/2" htmlFor={name}>
          {label}
        </Label>
        <div className={selectWithErrorContainerClassname}>
          <Input
            className={inputClassname}
            id={name}
            {...register(name)}
            {...props}
          />
          <span className={spanClassname}>{error}</span>
        </div>
      </div>
    </>
  );
}

type SelectValue = { value: string; label: string };
export type CustomSelectProps = ComponentProps<typeof Select> & {
  label: string;
  name: string;
  direction?: "vertical" | "horizontal";
  values: SelectValue[];
};

export function CustomSelect({
  label,
  name,
  direction = "vertical",
  values,
  ...props
}: CustomSelectProps) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name]?.message as string | undefined;

  const containerClassname = cn(
    "w-full flex gap-2",
    direction == "vertical" && "flex-col"
  );

  const selectWithErrorContainerClassname = cn(
    "flex flex-col gap-1",
    direction === "horizontal" && "w-1/2"
  );

  const selectClassname = cn(
    "w-full",
    error && "border-red-500 focus-visible:border-red-400"
  );

  const spanClassname = cn(`text-red-500 text-sm`, !error && "hidden");

  return (
    <>
      <div className={containerClassname}>
        <Label className="w-1/2" htmlFor={name}>
          {label}
        </Label>
        <div className={selectWithErrorContainerClassname}>
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value ?? ""}
                {...props}
              >
                <SelectTrigger className={selectClassname}>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {values.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <span className={spanClassname}>{error}</span>
        </div>
      </div>
    </>
  );
}
