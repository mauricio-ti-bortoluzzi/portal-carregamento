import { Button } from "@/components/ui/button";

export default function HeaderActions() {
  return (
    <div className="flex justify-between items-end mb-4">
      <h1 className="text-lg font-semibold">Tabela</h1>
      <div className="flex gap-2">
        <Button variant="secondary">Filtrar</Button>
        <Button>Gerar Ordem</Button>
      </div>
    </div>
  );
}
