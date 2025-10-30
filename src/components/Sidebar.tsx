import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DollarSign } from "lucide-react";

const buttons = [
  {
    icon: <DollarSign />,
    title: "Gestão de Requisição",
    link: "/operacional/gestao-de-requisicao",
  },
  {
    icon: <DollarSign />,
    title: "Requisições Finalizadas",
    link: "/operacional/requisicoes-finalizadas",
  },
  {
    icon: <DollarSign />,
    title: "Gestão de Produção",
    link: "/operacional/gestao-de-producao",
  },
];

export function CustomSidebar({ number }: { number: number }) {
  return (
    <Sidebar className="p-4">
      <SidebarHeader className="items-center gap-4">
        <span className="font-semibold text-center text-lg">Menu</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Controle de carregamento</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {buttons.map((item, i) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={i === number} asChild>
                    <a href={item.link}>
                      {item.icon}
                      <span className="text-base">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
