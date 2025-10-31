import {
  HeaderProps,
  SubtableHeaderProps,
  TableProps,
} from "@/components/ExpandableTable/type";

const data: ItemType[] = [
  {
    itemCode: "0001",
    item: "Sem 07A IPRO",
    balance: 500,
    released: { "3": true, "4": false },
    orders: [
      {
        code: "12",
        client: "José Cliente",
        volume: 120.5,
        seller: "Luiz Vendedor",
        companyName: "Silo Xxê",
        destiny: "Rua XXX, Xanxerê, SC",
      },
    ],
  },
  {
    itemCode: "0002",
    item: "Sem 08B",
    balance: 720,
    released: { "3": false, "4": true },
    orders: [
      {
        code: "101",
        client: "Carlos Silva",
        volume: 250,
        seller: "João Almeida",
        companyName: "Abelardo",
        destiny: "Rua das Palmeiras, Chapecó, SC",
      },
      {
        code: "102",
        client: "Mariana Lopes",
        volume: 180.5,
        seller: "Pedro Santos",
        companyName: "Silo Xxê",
        destiny: "Avenida Brasil, Xanxerê, SC",
      },
      {
        code: "103",
        client: "Lucas Vieira",
        volume: 90,
        seller: "João Almeida",
        companyName: "Abelardo",
        destiny: "Rua Central, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0003",
    item: "Sem 09C IPRO",
    balance: 310,
    released: { "3": true, "4": true },
    orders: [
      {
        code: "104",
        client: "Patrícia Ramos",
        volume: 130.2,
        seller: "Carla Mendes",
        companyName: "Silo Xxê",
        destiny: "Rua 7 de Setembro, Concórdia, SC",
      },
      {
        code: "105",
        client: "Rogério Lima",
        volume: 160.4,
        seller: "Carla Mendes",
        companyName: "Abelardo",
        destiny: "Rua Santos Dumont, Chapecó, SC",
      },
      {
        code: "106",
        client: "Sérgio Pinto",
        volume: 50,
        seller: "André Rosa",
        companyName: "Abelardo",
        destiny: "Rua Beira Rio, Xanxerê, SC",
      },
    ],
  },
  {
    itemCode: "0004",
    item: "Sem 10D",
    balance: 890,
    released: { "3": true, "4": false },
    orders: [
      {
        code: "107",
        client: "Fernanda Dias",
        volume: 300,
        seller: "Eduardo Gomes",
        companyName: "Silo Xxê",
        destiny: "Rua XV de Novembro, Chapecó, SC",
      },
      {
        code: "108",
        client: "Paulo Henrique",
        volume: 190,
        seller: "Eduardo Gomes",
        companyName: "Abelardo",
        destiny: "Rua das Rosas, Cordilheira Alta, SC",
      },
      {
        code: "109",
        client: "Camila Farias",
        volume: 130.6,
        seller: "Eduardo Gomes",
        companyName: "Silo Xxê",
        destiny: "Rua do Comércio, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0005",
    item: "Sem 11E IPRO",
    balance: 640,
    released: { "3": false, "4": true },
    orders: [
      {
        code: "110",
        client: "Luciana Rocha",
        volume: 220.5,
        seller: "Rafael Nunes",
        companyName: "Abelardo",
        destiny: "Rua das Araucárias, Faxinal dos Guedes, SC",
      },
      {
        code: "111",
        client: "Tiago Barbosa",
        volume: 160.1,
        seller: "Rafael Nunes",
        companyName: "Silo Xxê",
        destiny: "Rua Rio Branco, Xanxerê, SC",
      },
      {
        code: "112",
        client: "Helena Souza",
        volume: 300,
        seller: "Rafael Nunes",
        companyName: "Abelardo",
        destiny: "Rua 15 de Novembro, Chapecó, SC",
      },
      {
        code: "113",
        client: "Gabriel Martins",
        volume: 90.2,
        seller: "Rafael Nunes",
        companyName: "Silo Xxê",
        destiny: "Rua das Oliveiras, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0006",
    item: "Sem 12F",
    balance: 230,
    released: { "3": true, "4": false },
    orders: [
      {
        code: "114",
        client: "Felipe Andrade",
        volume: 80.5,
        seller: "Ana Castro",
        companyName: "Abelardo",
        destiny: "Rua Alvorada, Xanxerê, SC",
      },
      {
        code: "115",
        client: "Isabela Cardoso",
        volume: 60.4,
        seller: "Ana Castro",
        companyName: "Silo Xxê",
        destiny: "Rua Coronel Passos Maia, Xanxerê, SC",
      },
      {
        code: "116",
        client: "João Pedro",
        volume: 89.1,
        seller: "Ana Castro",
        companyName: "Abelardo",
        destiny: "Rua Beira Lago, Chapecó, SC",
      },
    ],
  },
  {
    itemCode: "0007",
    item: "Sem 13G IPRO",
    balance: 760,
    released: { "3": true, "4": true },
    orders: [
      {
        code: "117",
        client: "Marcos Vinícius",
        volume: 200,
        seller: "Vitor Prado",
        companyName: "Abelardo",
        destiny: "Rua Nova Trento, Chapecó, SC",
      },
      {
        code: "118",
        client: "Patrícia Gomes",
        volume: 310,
        seller: "Vitor Prado",
        companyName: "Silo Xxê",
        destiny: "Rua Nereu Ramos, Xanxerê, SC",
      },
      {
        code: "119",
        client: "Ricardo Borges",
        volume: 250,
        seller: "Vitor Prado",
        companyName: "Abelardo",
        destiny: "Rua das Flores, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0008",
    item: "Sem 14H",
    balance: 440,
    released: { "3": false, "4": false },
    orders: [
      {
        code: "120",
        client: "Cristina Silva",
        volume: 100,
        seller: "Beatriz Lima",
        companyName: "Abelardo",
        destiny: "Rua São João, Xanxerê, SC",
      },
      {
        code: "121",
        client: "Fernando Souza",
        volume: 150,
        seller: "Beatriz Lima",
        companyName: "Silo Xxê",
        destiny: "Rua das Acácias, Chapecó, SC",
      },
      {
        code: "122",
        client: "Roberta Castro",
        volume: 190,
        seller: "Beatriz Lima",
        companyName: "Abelardo",
        destiny: "Rua Anita Garibaldi, Xanxerê, SC",
      },
    ],
  },
  {
    itemCode: "0011",
    item: "Sem 17K IPRO",
    balance: 600,
    released: { "3": true, "4": true },
    orders: [
      {
        code: "111",
        client: "Juliano Rocha",
        volume: 260,
        seller: "Diego Moraes",
        companyName: "Abelardo",
        destiny: "Rua Santa Catarina, Xanxerê, SC",
      },
      {
        code: "112",
        client: "Renata Freitas",
        volume: 290,
        seller: "Diego Moraes",
        companyName: "Silo Xxê",
        destiny: "Rua Porto Alegre, Chapecó, SC",
      },
      {
        code: "113",
        client: "Vinícius Carvalho",
        volume: 140,
        seller: "Diego Moraes",
        companyName: "Abelardo",
        destiny: "Rua do Comércio, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0012",
    item: "Sem 18L",
    balance: 930,
    released: { "3": false, "4": true },
    orders: [
      {
        code: "121",
        client: "Igor Pereira",
        volume: 310,
        seller: "Márcio Dias",
        companyName: "Silo Xxê",
        destiny: "Rua Goiás, Xanxerê, SC",
      },
      {
        code: "122",
        client: "Cláudia Reis",
        volume: 250,
        seller: "Márcio Dias",
        companyName: "Abelardo",
        destiny: "Rua Paraná, Chapecó, SC",
      },
      {
        code: "123",
        client: "André Souza",
        volume: 210,
        seller: "Márcio Dias",
        companyName: "Silo Xxê",
        destiny: "Rua Santa Luzia, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0013",
    item: "Sem 19M IPRO",
    balance: 510,
    released: { "3": true, "4": false },
    orders: [
      {
        code: "131",
        client: "Caroline Lopes",
        volume: 200,
        seller: "Fernanda Castro",
        companyName: "Abelardo",
        destiny: "Rua Central, Xanxerê, SC",
      },
      {
        code: "132",
        client: "Leandro Pires",
        volume: 190,
        seller: "Fernanda Castro",
        companyName: "Silo Xxê",
        destiny: "Rua São Paulo, Chapecó, SC",
      },
      {
        code: "133",
        client: "Letícia Gomes",
        volume: 120,
        seller: "Fernanda Castro",
        companyName: "Abelardo",
        destiny: "Rua Marechal Floriano, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0014",
    item: "Sem 20N",
    balance: 700,
    released: { "3": true, "4": true },
    orders: [
      {
        code: "141",
        client: "Paula Fernandes",
        volume: 240,
        seller: "Roberto Moura",
        companyName: "Abelardo",
        destiny: "Rua das Araucárias, Xanxerê, SC",
      },
      {
        code: "142",
        client: "Joana Costa",
        volume: 310,
        seller: "Roberto Moura",
        companyName: "Silo Xxê",
        destiny: "Rua Sete de Setembro, Chapecó, SC",
      },
      {
        code: "143",
        client: "Eduardo Ramos",
        volume: 180,
        seller: "Roberto Moura",
        companyName: "Abelardo",
        destiny: "Rua Duque de Caxias, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0015",
    item: "Sem 21O IPRO",
    balance: 870,
    released: { "3": false, "4": false },
    orders: [
      {
        code: "151",
        client: "Amanda Rocha",
        volume: 400,
        seller: "Lívia Torres",
        companyName: "Silo Xxê",
        destiny: "Rua Pio XII, Xanxerê, SC",
      },
      {
        code: "152",
        client: "Robson Almeida",
        volume: 290,
        seller: "Lívia Torres",
        companyName: "Abelardo",
        destiny: "Rua Monte Castelo, Chapecó, SC",
      },
      {
        code: "153",
        client: "Gustavo Souza",
        volume: 260,
        seller: "Lívia Torres",
        companyName: "Silo Xxê",
        destiny: "Rua das Oliveiras, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0016",
    item: "Sem 22P",
    balance: 460,
    released: { "3": true, "4": false },
    orders: [
      {
        code: "161",
        client: "Luana Ribeiro",
        volume: 160,
        seller: "Rogério Braga",
        companyName: "Abelardo",
        destiny: "Rua do Sol, Xanxerê, SC",
      },
      {
        code: "162",
        client: "Daniel Correia",
        volume: 200,
        seller: "Rogério Braga",
        companyName: "Silo Xxê",
        destiny: "Rua das Palmeiras, Chapecó, SC",
      },
      {
        code: "163",
        client: "Patrícia Alves",
        volume: 100,
        seller: "Rogério Braga",
        companyName: "Abelardo",
        destiny: "Rua São João, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0017",
    item: "Sem 23Q IPRO",
    balance: 350,
    released: { "3": true, "4": true },
    orders: [
      {
        code: "171",
        client: "Henrique Silva",
        volume: 150,
        seller: "Renan Duarte",
        companyName: "Abelardo",
        destiny: "Rua Anita Garibaldi, Xanxerê, SC",
      },
      {
        code: "172",
        client: "Laura Mendes",
        volume: 120,
        seller: "Renan Duarte",
        companyName: "Silo Xxê",
        destiny: "Rua Tiradentes, Chapecó, SC",
      },
      {
        code: "173",
        client: "Bruno Lima",
        volume: 80,
        seller: "Renan Duarte",
        companyName: "Abelardo",
        destiny: "Rua 21 de Abril, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0018",
    item: "Sem 24R",
    balance: 940,
    released: { "3": false, "4": true },
    orders: [
      {
        code: "181",
        client: "Tatiane Cunha",
        volume: 320,
        seller: "Silvio Ramos",
        companyName: "Silo Xxê",
        destiny: "Rua 13 de Maio, Xanxerê, SC",
      },
      {
        code: "182",
        client: "Douglas Lima",
        volume: 270,
        seller: "Silvio Ramos",
        companyName: "Abelardo",
        destiny: "Rua Castro Alves, Chapecó, SC",
      },
      {
        code: "183",
        client: "Isadora Martins",
        volume: 190,
        seller: "Silvio Ramos",
        companyName: "Silo Xxê",
        destiny: "Rua das Hortênsias, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0019",
    item: "Sem 25S IPRO",
    balance: 520,
    released: { "3": true, "4": false },
    orders: [
      {
        code: "191",
        client: "Anderson Silva",
        volume: 210,
        seller: "Luana Pires",
        companyName: "Abelardo",
        destiny: "Rua Dom Pedro, Xanxerê, SC",
      },
      {
        code: "192",
        client: "Marina Duarte",
        volume: 160,
        seller: "Luana Pires",
        companyName: "Silo Xxê",
        destiny: "Rua São Francisco, Chapecó, SC",
      },
      {
        code: "193",
        client: "João Victor",
        volume: 150,
        seller: "Luana Pires",
        companyName: "Abelardo",
        destiny: "Rua Bela Vista, Xaxim, SC",
      },
    ],
  },
  {
    itemCode: "0020",
    item: "Sem 26T",
    balance: 880,
    released: { "3": false, "4": true },
    orders: [
      {
        code: "201",
        client: "Paulo Silva",
        volume: 300,
        seller: "Larissa Costa",
        companyName: "Silo Xxê",
        destiny: "Rua Santa Terezinha, Xanxerê, SC",
      },
      {
        code: "202",
        client: "Camila Almeida",
        volume: 260,
        seller: "Larissa Costa",
        companyName: "Abelardo",
        destiny: "Rua das Laranjeiras, Chapecó, SC",
      },
      {
        code: "203",
        client: "Lucas Pereira",
        volume: 320,
        seller: "Larissa Costa",
        companyName: "Silo Xxê",
        destiny: "Rua Dom Bosco, Xaxim, SC",
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
      label: "Liberado para carregamento\nAbelardo",
      colSize: 1,
      align: "center",
    },
    {
      label: "Liberado para carregamento - Silo Xxê.",
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
      label: "Empresa por nome",
      colSize: 1,
    },
    {
      label: "Volume",
      colSize: 1,
    },
    {
      label: "Destino da Carga",
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
          value: request.released[3] ? "Sim" : "Não",
          colSize: headers[3].colSize,
          align: headers[3].align,
        },
        {
          value: request.released[4] ? "Sim" : "Não",
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
              colSize: subheaders[3].colSize,
            },
            {
              value: order.companyName,
              colSize: subheaders[4].colSize,
            },
            {
              value: order.volume,
              colSize: subheaders[2].colSize,
            },
            {
              value: order.destiny,
              colSize: subheaders[5].colSize,
            },
          ],
        })),
      },
    })),
  };
}

export type OrderType = {
  code: string;
  volume: number;
  client: string;
  seller: string;
  companyName: string;
  destiny: string;
};

export type ItemType = {
  itemCode: string;
  item: string;
  balance: number;
  released: {
    "3": boolean;
    "4": boolean;
  };
  orders: OrderType[];
};

export default data;
