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
    companyName: "Silo Xxê.",
    order: [
      { batch: 1011, volume: 120 },
      { batch: 1012, volume: 200 },
      { batch: 1013, volume: 180 },
    ],
  },
  {
    request: 2,
    itemCode: "0002",
    item: "Sem 03B IPRO",
    volume: 340,
    companyName: "Abelardo",
    order: [
      { batch: 1021, volume: 140 },
      { batch: 1022, volume: 200 },
    ],
  },
  {
    request: 3,
    itemCode: "0003",
    item: "Sem 12C IPRO",
    volume: 690,
    companyName: "Silo Xxê.",
    order: [
      { batch: 1031, volume: 240 },
      { batch: 1032, volume: 200 },
      { batch: 1033, volume: 250 },
    ],
  },
  {
    request: 4,
    itemCode: "0004",
    item: "Sem 09D IPRO",
    volume: 420,
    companyName: "Faxinal",
    order: [
      { batch: 1041, volume: 100 },
      { batch: 1042, volume: 150 },
      { batch: 1043, volume: 170 },
    ],
  },
  {
    request: 5,
    itemCode: "0005",
    item: "Sem 21E IPRO",
    volume: 300,
    companyName: "Silo Xxê.",
    order: [
      { batch: 1051, volume: 80 },
      { batch: 1052, volume: 120 },
      { batch: 1053, volume: 100 },
    ],
  },
  {
    request: 6,
    itemCode: "0006",
    item: "Sem 14F IPRO",
    volume: 510,
    companyName: "Abelardo",
    order: [
      { batch: 1061, volume: 200 },
      { batch: 1062, volume: 150 },
      { batch: 1063, volume: 160 },
    ],
  },
  {
    request: 7,
    itemCode: "0007",
    item: "Sem 05G IPRO",
    volume: 280,
    companyName: "Silo Xxê.",
    order: [
      { batch: 1071, volume: 80 },
      { batch: 1072, volume: 100 },
      { batch: 1073, volume: 100 },
    ],
  },
  {
    request: 8,
    itemCode: "0008",
    item: "Sem 16H IPRO",
    volume: 760,
    companyName: "Silo Xxê.",
    order: [
      { batch: 1081, volume: 300 },
      { batch: 1082, volume: 260 },
      { batch: 1083, volume: 200 },
    ],
  },
  {
    request: 9,
    itemCode: "0009",
    item: "Sem 33I IPRO",
    volume: 450,
    companyName: "Faxinal",
    order: [
      { batch: 1091, volume: 200 },
      { batch: 1092, volume: 150 },
      { batch: 1093, volume: 100 },
    ],
  },
  {
    request: 10,
    itemCode: "0010",
    item: "Sem 44J IPRO",
    volume: 620,
    companyName: "Silo Xxê.",
    order: [
      { batch: 1101, volume: 220 },
      { batch: 1102, volume: 200 },
      { batch: 1103, volume: 200 },
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
      label: "Volume",
      colSize: 1,
      align: "start",
    },
    {
      label: "Empresa de Destino",
      colSize: 1,
      align: "center",
    },
  ];

  const subheaders: SubtableHeaderProps[] = [
    {
      label: "Lote",
      colSize: 1,
    },
    {
      label: "Volume",
      colSize: 4,
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
          value: request.companyName,
          colSize: headers[4].colSize,
          align: headers[4].align as "start" | "end",
        },
      ],
      subtable: {
        headers: subheaders,
        rows: request.order.map((operation) => ({
          cells: [
            {
              value: operation.batch,
              colSize: subheaders[0].colSize,
            },
            {
              value: operation.volume,
              colSize: subheaders[1].colSize,
            },
          ],
        })),
      },
    })),
  };
}

export type OrderType = {
  batch: number;
  volume: number;
};

export type RequestType = {
  request: number;
  itemCode: string;
  item: string;
  volume: number;
  companyName: string;
  order: OrderType[];
};

export default data;
