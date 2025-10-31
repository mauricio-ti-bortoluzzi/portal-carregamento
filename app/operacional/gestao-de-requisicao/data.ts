import {
  HeaderProps,
  SubtableHeaderProps,
  TableProps,
} from "@/components/ExpandableTable/type";

const invoices = [
  {
    itemCode: "0001",
    item: "Sem 01A1 IPRO",
    balance: 780.5,
    orders: [
      {
        code: "000001",
        client: "José Cliente",
        volume: 120.5,
        companyName: "Silo Xxê",
      },
      {
        code: "000002",
        client: "Maria Silva",
        volume: 300,
        companyName: "Ab. Luz",
      },
      {
        code: "000003",
        client: "Carlos Souza",
        volume: 360,
        companyName: "Moinho Xxê",
      },
    ],
  },
  {
    itemCode: "0002",
    item: "Sem 01B2 IPRO",
    balance: 950,
    orders: [
      {
        code: "000004",
        client: "Ana Costa",
        volume: 200,
        companyName: "Irani",
      },
      {
        code: "000005",
        client: "Pedro Lima",
        volume: 250,
        companyName: "Faxinal",
      },
      {
        code: "000006",
        client: "Lucas Martins",
        volume: 500,
        companyName: "Silo Xxê",
      },
    ],
  },
  {
    itemCode: "0003",
    item: "Sem 01C3 IPRO",
    balance: 430,
    orders: [
      {
        code: "000007",
        client: "Fernanda Reis",
        volume: 430,
        companyName: "Ab. Luz",
      },
    ],
  },
  {
    itemCode: "0004",
    item: "Sem 01D4 IPRO",
    balance: 1020.75,
    orders: [
      {
        code: "000008",
        client: "Rafael Pinto",
        volume: 400.25,
        companyName: "Moinho Xxê",
      },
      {
        code: "000009",
        client: "Marcos Almeida",
        volume: 300.5,
        companyName: "Irani",
      },
      {
        code: "000010",
        client: "Beatriz Nunes",
        volume: 320,
        companyName: "Faxinal",
      },
    ],
  },
  {
    itemCode: "0005",
    item: "Sem 01E5 IPRO",
    balance: 540,
    orders: [
      {
        code: "000011",
        client: "Tiago Souza",
        volume: 200,
        companyName: "Silo Xxê",
      },
      {
        code: "000012",
        client: "Patrícia Lima",
        volume: 340,
        companyName: "Ab. Luz",
      },
    ],
  },
  {
    itemCode: "0006",
    item: "Sem 01F6 IPRO",
    balance: 890.5,
    orders: [
      {
        code: "000013",
        client: "Eduardo Martins",
        volume: 300.5,
        companyName: "Moinho Xxê",
      },
      {
        code: "000014",
        client: "Juliana Alves",
        volume: 400,
        companyName: "Irani",
      },
      {
        code: "000015",
        client: "Carla Pereira",
        volume: 190,
        companyName: "Faxinal",
      },
    ],
  },
  {
    itemCode: "0007",
    item: "Sem 01G7 IPRO",
    balance: 210,
    orders: [
      {
        code: "000016",
        client: "Rogério Lima",
        volume: 210,
        companyName: "Silo Xxê",
      },
    ],
  },
  {
    itemCode: "0008",
    item: "Sem 01H8 IPRO",
    balance: 760,
    orders: [
      {
        code: "000017",
        client: "Larissa Costa",
        volume: 200,
        companyName: "Ab. Luz",
      },
      {
        code: "000018",
        client: "Gustavo Oliveira",
        volume: 300,
        companyName: "Moinho Xxê",
      },
      {
        code: "000019",
        client: "Renata Almeida",
        volume: 260,
        companyName: "Irani",
      },
    ],
  },
  {
    itemCode: "0009",
    item: "Sem 01I9 IPRO",
    balance: 470.5,
    orders: [
      {
        code: "000020",
        client: "Paulo Santos",
        volume: 470.5,
        companyName: "Faxinal",
      },
    ],
  },
  {
    itemCode: "0010",
    item: "Sem 01J10 IPRO",
    balance: 1020,
    orders: [
      {
        code: "000021",
        client: "Cláudia Moreira",
        volume: 300,
        companyName: "Silo Xxê",
      },
      {
        code: "000022",
        client: "Fábio Ribeiro",
        volume: 400,
        companyName: "Ab. Luz",
      },
      {
        code: "000023",
        client: "Isabela Dias",
        volume: 320,
        companyName: "Moinho Xxê",
      },
    ],
  },
  {
    itemCode: "0011",
    item: "Sem 01K11 IPRO",
    balance: 560,
    orders: [
      {
        code: "000024",
        client: "Rodrigo Almeida",
        volume: 200,
        companyName: "Irani",
      },
      {
        code: "000025",
        client: "Sabrina Lima",
        volume: 360,
        companyName: "Faxinal",
      },
    ],
  },
  {
    itemCode: "0012",
    item: "Sem 01L12 IPRO",
    balance: 940,
    orders: [
      {
        code: "000026",
        client: "Vitor Costa",
        volume: 400,
        companyName: "Silo Xxê",
      },
      {
        code: "000027",
        client: "Carolina Mendes",
        volume: 300,
        companyName: "Ab. Luz",
      },
      {
        code: "000028",
        client: "Daniel Oliveira",
        volume: 240,
        companyName: "Moinho Xxê",
      },
    ],
  },
  {
    itemCode: "0013",
    item: "Sem 01M13 IPRO",
    balance: 510,
    orders: [
      {
        code: "000029",
        client: "Aline Ferreira",
        volume: 210,
        companyName: "Irani",
      },
      {
        code: "000030",
        client: "Guilherme Rocha",
        volume: 300,
        companyName: "Faxinal",
      },
    ],
  },
  {
    itemCode: "0014",
    item: "Sem 01N14 IPRO",
    balance: 350,
    orders: [
      {
        code: "000031",
        client: "Marcelo Lima",
        volume: 100,
        companyName: "Silo Xxê",
      },
      {
        code: "000032",
        client: "Tatiane Santos",
        volume: 250,
        companyName: "Ab. Luz",
      },
    ],
  },
  {
    itemCode: "0015",
    item: "Sem 01O15 IPRO",
    balance: 880.5,
    orders: [
      {
        code: "000033",
        client: "Leandro Souza",
        volume: 300.5,
        companyName: "Moinho Xxê",
      },
      {
        code: "000034",
        client: "Priscila Martins",
        volume: 580,
        companyName: "Irani",
      },
    ],
  },
  {
    itemCode: "0016",
    item: "Sem 01P16 IPRO",
    balance: 470,
    orders: [
      {
        code: "000035",
        client: "Fabiana Costa",
        volume: 470,
        companyName: "Faxinal",
      },
    ],
  },
];

type OrderType = {
  code: string;
  client: string;
  volume: number;
  companyName: string;
};

export type DataType = {
  itemCode: string;
  item: string;
  balance: number;
  orders: OrderType[];
};

export function formatInvoicesToTable(invoices: DataType[]): TableProps {
  const headers: HeaderProps[] = [
    {
      label: "Código",
      colSize: 1,
      align: "start",
    },
    {
      label: "Item",
      colSize: 1,
      align: "start",
    },
    {
      label: "Saldo",
      colSize: 2,
      align: "end",
    },
  ];

  const subheaders: SubtableHeaderProps[] = [
    {
      label: "Nº pedido",
      colSize: 1,
    },
    {
      label: "Cliente",
      colSize: 1,
    },
    {
      label: "Volume",
      colSize: 1,
    },
    {
      label: "Empresa",
      colSize: 1,
    },
  ];

  return {
    headers,
    rows: invoices.map((invoice) => ({
      cells: [
        {
          value: invoice.itemCode,
          colSize: headers[0].colSize,
          align: headers[0].align,
        },
        {
          value: invoice.item,
          colSize: headers[1].colSize,
          align: headers[1].align,
        },
        {
          value: invoice.balance.toFixed(2),
          colSize: headers[2].colSize,
          align: headers[2].align,
        },
      ],
      subtable: {
        headers: subheaders,
        rows: invoice.orders.map((order) => ({
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
              value: order.volume.toFixed(2),
              colSize: subheaders[2].colSize,
            },
            {
              value: order.companyName,
              colSize: subheaders[3].colSize,
            },
          ],
        })),
      },
    })),
  };
}

export default invoices;
