import { CustomSidebar } from "./Sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
  number: number;
  title: string;
}>;

export function DashboardLayout({
  number,
  title,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="bg-sidebar h-screen flex">
      <SidebarProvider>
        <CustomSidebar number={number} />

        <div className="bg-background m-4 border rounded-lg w-full flex flex-col">
          {/* Header fixo */}
          <div className="py-2 px-4 border-b flex gap-4 items-center shrink-0 sticky top-0 bg-background z-10">
            <SidebarTrigger />
            <div className="border-r h-8" />
            <h1 className="font-medium text-lg">{title}</h1>
          </div>

          {/* Conteúdo com scroll */}
          <div className="flex-1 overflow-y-scroll px-16 py-8 space-y-4">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
