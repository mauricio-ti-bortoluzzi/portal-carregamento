import { FormFieldsProps } from "@/components/Form";
import { FilterProps, NewOpProps } from "./schema";
import data from "./data";

export function getFilterFormFields() {
  const fields: FormFieldsProps = [
    {
      fieldtype: "input",
      type: "number",
      name: "OPNumber",
      label: "Nº da OP",
      placeholder: "10010",
      direction: "horizontal",
    },
    {
      fieldtype: "select",
      label: "Unidade",
      name: "unit",
      direction: "horizontal",
      values: [
        {
          value: "1",
          label: "Silo Xxê.",
        },
        {
          value: "2",
          label: "Ab. Luz",
        },
      ],
    },
  ];

  return fields;
}

export function handleFilterSubmit(data: FilterProps) {
  data;
}

export function getNewOpFormFields(dataId: string) {
  const item = data.find((request) => String(request.request) == dataId);

  const newOpFormFields: FormFieldsProps = [
    {
      fieldtype: "input",
      type: "text",
      name: "request",
      label: "Requisição",
      disabled: true,
      value: dataId ?? "",
      direction: "horizontal",
    },
    {
      fieldtype: "input",
      type: "text",
      name: "item_code",
      label: "Código do Item",
      disabled: true,
      value: item?.itemCode ?? "",
      direction: "horizontal",
    },
    {
      fieldtype: "input",
      type: "text",
      name: "item",
      label: "Item",
      disabled: true,
      value: item?.item ?? "",
      direction: "horizontal",
    },
    {
      fieldtype: "select",
      label: "Unidade",
      name: "unit",
      direction: "horizontal",
      values: [
        {
          value: "2",
          label: "Silo Xxê.",
        },
        {
          value: "3",
          label: "Ab. Luz",
        },
      ],
    },
    {
      fieldtype: "input",
      type: "number",
      name: "op",
      label: "Nº da OP",
      placeholder: "10010",
      direction: "horizontal",
    },
    {
      fieldtype: "input",
      type: "number",
      name: "volume",
      label: "Volume",
      step: "0.01",
      placeholder: "10010",
      direction: "horizontal",
    },
  ];

  return newOpFormFields;
}

export function handleNewOpFormSubmit(data: NewOpProps) {
  data;
}
