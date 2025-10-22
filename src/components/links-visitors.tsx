// components/links-visitors.tsx
import { TableCell, TableRow } from "@/components/ui/table";

export default function LinksVisitors({ linkId }: { linkId: string }) {
  const visitors = [
    {
      id: "v1",
      name: "João Silva",
      totalDuration: "2m 35s",
      completionRate: 75,
    },
    {
      id: "v2",
      name: "Maria Souza",
      totalDuration: "1m 12s",
      completionRate: 40,
    },
    {
      id: "v3",
      name: "Carlos Pereira",
      totalDuration: "4m 05s",
      completionRate: 95,
    },
  ];

  return (
    <>
      {visitors
        ? visitors.map((visitor) => (
            <TableRow key={visitor.id}>
              <TableCell>{visitor.name}</TableCell>
              <TableCell>{visitor.totalDuration}</TableCell>
              <TableCell>Teste</TableCell>
            </TableRow>
          ))
        : null}
    </>
  );
}
