import {
  HeaderProps,
  SubtableHeaderProps,
  TableProps,
} from "@/components/ExpandableTable/type";

const data: ItemType[] = [
  {
    itemCode: "0001",
    item: "Sem 07A IPRO",
    balance: 1000,
    released: { "3": 450, "4": 400 },
    orders: [
      {
        code: "12",
        client: "José Cliente",
        volume: { "3": 50, "4": 100 },
        seller: "Luiz Vendedor",
      },
    ],
  },
  {
    itemCode: "0002",
    item: "Sem 05B",
    balance: 800,
    released: { "3": 0, "4": 0 },
    orders: [
      {
        code: "15",
        client: "Fazenda Boa Esperança",
        volume: { "3": 150, "4": 120 },
        seller: "Ana Martins",
      },
      {
        code: "16",
        client: "Agro Vale Verde",
        volume: { "3": 200, "4": 180 },
        seller: "Pedro Nogueira",
      },
    ],
  },
  {
    itemCode: "0003",
    item: "Sem 08C IPRO",
    balance: 1000,
    released: { "3": 0, "4": 0 },
    orders: [
      {
        code: "21",
        client: "Cooperativa São João",
        volume: { "3": 250, "4": 200 },
        seller: "Rafael Gomes",
      },
      {
        code: "22",
        client: "Grãos do Sul Ltda",
        volume: { "3": 150, "4": 170 },
        seller: "Lívia Santos",
      },
    ],
  },
  {
    itemCode: "0004",
    item: "Sem 06D",
    balance: 650,
    released: { "3": 0, "4": 0 },
    orders: [
      {
        code: "25",
        client: "Agroplan LTDA",
        volume: { "3": 100, "4": 90 },
        seller: "Tiago Rezende",
      },
      {
        code: "26",
        client: "Fazenda Santa Rita",
        volume: { "3": 80, "4": 120 },
        seller: "Mariana Farias",
      },
    ],
  },
  {
    itemCode: "0005",
    item: "Sem 09E IPRO",
    balance: 1200,
    released: { "3": 0, "4": 0 },
    orders: [
      {
        code: "30",
        client: "Cerealista Nova Era",
        volume: { "3": 300, "4": 250 },
        seller: "Felipe Tavares",
      },
      {
        code: "31",
        client: "Coopagro União",
        volume: { "3": 200, "4": 220 },
        seller: "Bruna Leite",
      },
      {
        code: "32",
        client: "Fazenda do Horizonte",
        volume: { "3": 150, "4": 180 },
        seller: "Diego Silva",
      },
    ],
  },
];

export function formatInvoicesToTable(data: ItemType[]): TableProps {
  const headers: HeaderProps[] = [
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
      label: "Total previsto para a entrega",
      colSize: 1,
      align: "start",
    },
    {
      label: "Vol. Liberado para carregamento\nAbelardo",
      colSize: 1,
      align: "center",
    },
    {
      label: "Vol. Liberado para carregamento\nSilo Xxê.",
      colSize: 2,
      align: "center",
    },
  ];

  const subheaders: SubtableHeaderProps[] = [
    {
      label: "Pedido",
      colSize: 1,
    },
    {
      label: "Cliente",
      colSize: 1,
    },
    {
      label: "Vendedor",
      colSize: 1,
    },
    {
      label: "Volume (Abelardo)",
      colSize: 1,
    },
    {
      label: "Volume (Silo Xxê.)",
      colSize: 1,
    },
  ];

  return {
    headers,
    rows: data.map((request) => ({
      cells: [
        {
          value: request.itemCode,
          colSize: headers[0].colSize,
          align: headers[0].align,
        },
        {
          value: request.item,
          colSize: headers[1].colSize,
          align: headers[1].align,
        },
        {
          value: request.balance,
          colSize: headers[2].colSize,
          align: headers[2].align,
        },
        {
          value: request.released[3],
          colSize: headers[3].colSize,
          align: headers[3].align,
        },
        {
          value: request.released[4],
          colSize: headers[4].colSize,
          align: headers[4].align,
        },
      ],
      subtable: {
        headers: subheaders,
        rows: request.orders.map((order) => ({
          cells: [
            {
              value: order.code,
              colSize: subheaders[0].colSize,
            },
            {
              value: order.client,
              colSize: subheaders[1].colSize,
            },
            {
              value: order.seller,
              colSize: subheaders[2].colSize,
            },
            {
              value: order.volume[3],
              colSize: subheaders[3].colSize,
            },
            {
              value: order.volume[4],
              colSize: subheaders[4].colSize,
            },
          ],
        })),
      },
    })),
  };
}

export type OrderType = {
  code: string;
  client: string;
  seller: string;
  volume: {
    "3": number;
    "4": number;
  };
};

export type ItemType = {
  itemCode: string;
  item: string;
  balance: number;
  released: {
    "3": number;
    "4": number;
  };
  orders: OrderType[];
};

export default data;
