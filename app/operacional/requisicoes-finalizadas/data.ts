import {
  HeaderProps,
  SubtableHeaderProps,
  TableProps,
} from "@/components/ExpandableTable/type";

const data: RequestType[] = [
  {
    request: 1,
    itemCode: "0001",
    item: "Sem 07A IPRO",
    volume: 500,
    status: "Aguardando",
    operations: [
      { code: 1011, volume: 120, companyName: "Silo Xxê" },
      { code: 1012, volume: 200, companyName: "Ab. Luz" },
      { code: 1013, volume: 180, companyName: "Moinho Xxê" },
    ],
  },
  {
    request: 2,
    itemCode: "0002",
    item: "Sem 03B IPRO",
    volume: 340,
    status: "Em Execução",
    operations: [
      { code: 1021, volume: 140, companyName: "Irani" },
      { code: 1022, volume: 200, companyName: "Faxinal" },
    ],
  },
  {
    request: 3,
    itemCode: "0003",
    item: "Sem 12C IPRO",
    volume: 690,
    status: "Aguardando",
    operations: [
      { code: 1031, volume: 240, companyName: "Silo Xxê" },
      { code: 1032, volume: 200, companyName: "Ab. Luz" },
      { code: 1033, volume: 250, companyName: "Moinho Xxê" },
    ],
  },
  {
    request: 4,
    itemCode: "0004",
    item: "Sem 09D IPRO",
    volume: 420,
    status: "Finalizado",
    operations: [
      { code: 1041, volume: 100, companyName: "Faxinal" },
      { code: 1042, volume: 150, companyName: "Irani" },
      { code: 1043, volume: 170, companyName: "Silo Xxê" },
    ],
  },
  {
    request: 5,
    itemCode: "0005",
    item: "Sem 21E IPRO",
    volume: 300,
    status: "Aguardando",
    operations: [
      { code: 1051, volume: 80, companyName: "Ab. Luz" },
      { code: 1052, volume: 120, companyName: "Faxinal" },
      { code: 1053, volume: 100, companyName: "Moinho Xxê" },
    ],
  },
  {
    request: 6,
    itemCode: "0006",
    item: "Sem 14F IPRO",
    volume: 510,
    status: "Em Execução",
    operations: [
      { code: 1061, volume: 200, companyName: "Irani" },
      { code: 1062, volume: 150, companyName: "Faxinal" },
      { code: 1063, volume: 160, companyName: "Silo Xxê" },
    ],
  },
  {
    request: 7,
    itemCode: "0007",
    item: "Sem 05G IPRO",
    volume: 280,
    status: "Aguardando",
    operations: [
      { code: 1071, volume: 80, companyName: "Ab. Luz" },
      { code: 1072, volume: 100, companyName: "Moinho Xxê" },
      { code: 1073, volume: 100, companyName: "Irani" },
    ],
  },
  {
    request: 8,
    itemCode: "0008",
    item: "Sem 16H IPRO",
    volume: 760,
    status: "Aguardando",
    operations: [
      { code: 1081, volume: 300, companyName: "Silo Xxê" },
      { code: 1082, volume: 260, companyName: "Ab. Luz" },
      { code: 1083, volume: 200, companyName: "Faxinal" },
    ],
  },
  {
    request: 9,
    itemCode: "0009",
    item: "Sem 33I IPRO",
    volume: 450,
    status: "Finalizado",
    operations: [
      { code: 1091, volume: 200, companyName: "Moinho Xxê" },
      { code: 1092, volume: 150, companyName: "Irani" },
      { code: 1093, volume: 100, companyName: "Silo Xxê" },
    ],
  },
  {
    request: 10,
    itemCode: "0010",
    item: "Sem 44J IPRO",
    volume: 620,
    status: "Aguardando",
    operations: [
      { code: 1101, volume: 220, companyName: "Ab. Luz" },
      { code: 1102, volume: 200, companyName: "Faxinal" },
      { code: 1103, volume: 200, companyName: "Irani" },
    ],
  },
];

export function formatInvoicesToTable(data: RequestType[]): TableProps {
  const headers: HeaderProps[] = [
    {
      label: "Requisição",
      colSize: 1,
      align: "start",
    },
    {
      label: "Código do Item",
      colSize: 1,
      align: "start",
    },
    {
      label: "Item",
      colSize: 1,
      align: "start",
    },
    {
      label: "Volume Disponível",
      colSize: 1,
      align: "start",
    },
    {
      label: "Status",
      colSize: 1,
      align: "center",
    },
  ];

  const subheaders: SubtableHeaderProps[] = [
    {
      label: "OP",
      colSize: 1,
    },
    {
      label: "Empresa",
      colSize: 1,
    },
    {
      label: "Volume",
      colSize: 3,
    },
  ];

  return {
    headers,
    rows: data.map((request) => ({
      cells: [
        {
          value: request.request,
          colSize: headers[0].colSize,
          align: headers[0].align as "start" | "end",
        },
        {
          value: request.itemCode,
          colSize: headers[1].colSize,
          align: headers[1].align as "start" | "end",
        },
        {
          value: request.item,
          colSize: headers[2].colSize,
          align: headers[2].align as "start" | "end",
        },
        {
          value: request.volume,
          colSize: headers[3].colSize,
          align: headers[3].align as "start" | "end",
        },
        {
          value: request.status,
          colSize: headers[4].colSize,
          align: headers[4].align as "start" | "end",
        },
      ],
      subtable: {
        headers: subheaders,
        rows: request.operations.map((operation) => ({
          cells: [
            {
              value: operation.code,
              colSize: subheaders[0].colSize,
            },
            {
              value: operation.companyName,
              colSize: subheaders[1].colSize,
            },
            {
              value: operation.volume,
              colSize: subheaders[2].colSize,
            },
          ],
        })),
      },
    })),
  };
}

export type OperationType = {
  code: number;
  volume: number;
  companyName: string;
};

export type RequestType = {
  request: number;
  itemCode: string;
  item: string;
  volume: number;
  status: "Aguardando" | "Em Execução" | "Finalizado";
  operations: OperationType[];
};

export default data;
