import { FormFieldsProps } from "@/components/Form";

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

// data: FilterProps
export function handleFilterSubmit() {}
