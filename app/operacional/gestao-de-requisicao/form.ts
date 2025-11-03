import { FormFieldsProps } from "@/components/Form";

export function getFormFields() {
  const fields: FormFieldsProps = [
    {
      fieldtype: "input",
      type: "date",
      name: "estimatedDeliveryDate",
      label: "Previsão de entrega",
      placeholder: "22-11-2025",
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
