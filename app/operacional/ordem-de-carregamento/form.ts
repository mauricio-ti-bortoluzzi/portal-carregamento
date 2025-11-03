import { FormFieldsProps } from "@/components/Form";
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
      label: "Cultivar",
      name: "product",
      direction: "horizontal",
      values: [
        {
          value: "001",
          label: "Sem 01A1 IPRO",
        },
        {
          value: "002",
          label: "Sem 01B2 IPRO",
        },
        {
          value: "003",
          label: "Sem 01C3 IPRO",
        },
        {
          value: "004",
          label: "Sem 01D4 IPRO",
        },
        {
          value: "005",
          label: "Sem 01E5 IPRO",
        },
        {
          value: "006",
          label: "Sem 01F6 IPRO",
        },
        {
          value: "007",
          label: "Sem 01G7 IPRO",
        },
        {
          value: "008",
          label: "Sem 01H8 IPRO",
        },
        {
          value: "009",
          label: "Sem 01I9 IPRO",
        },
        {
          value: "010",
          label: "Sem 01J10 IPRO",
        },
        {
          value: "011",
          label: "Sem 01K11 IPRO",
        },
        {
          value: "012",
          label: "Sem 01L12 IPRO",
        },
        {
          value: "013",
          label: "Sem 01M13 IPRO",
        },
        {
          value: "014",
          label: "Sem 01N14 IPRO",
        },
        {
          value: "015",
          label: "Sem 01O15 IPRO",
        },
        {
          value: "016",
          label: "Sem 01P16 IPRO",
        },
      ],
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

// data: FilterProps
export function handleFilterSubmit() {}

export function getNewOrderFormFields() {
  const newOpFormFields: FormFieldsProps = [
    {
      fieldtype: "input",
      type: "text",
      name: "batch",
      label: "Lote",
      direction: "horizontal",
    },
  ];

  return newOpFormFields;
}

export function getOptionsFormFields(id: string) {
  const itemFound = data.find((item) => String(item.request) === id);

  const newOpFormFields: FormFieldsProps = [
    {
      fieldtype: "input",
      type: "number",
      name: "request",
      label: "Requisição",
      direction: "horizontal",
      value: itemFound?.request,
      disabled: true,
    },
    {
      fieldtype: "input",
      type: "string",
      name: "item_code",
      label: "Código do Item",
      direction: "horizontal",
      value: itemFound?.itemCode,
      disabled: true,
    },
    {
      fieldtype: "input",
      type: "string",
      name: "item",
      label: "Item",
      direction: "horizontal",
      value: itemFound?.item,
      disabled: true,
    },
    {
      fieldtype: "input",
      type: "text",
      name: "batch",
      label: "Lote",
      direction: "horizontal",
    },
  ];

  return newOpFormFields;
}

// data: NewOrderProps
export function handleNewOrderFormSubmit() {}
