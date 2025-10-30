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
          label: "Sem 610 IPRO",
        },
        {
          value: "002",
          label: "Sem O580",
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
