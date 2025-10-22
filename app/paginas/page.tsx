import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold text-foreground">Páginas</h1>
      <div className="pl-2 flex flex-col gap-2 items-start">
        <Button>
          <Link href="/">Login</Link>
        </Button>
        <Button>
          <Link href="/operacional/gestao-de-requisicoes">
            Gestão de Requisições
          </Link>
        </Button>
      </div>
    </div>
  );
}
