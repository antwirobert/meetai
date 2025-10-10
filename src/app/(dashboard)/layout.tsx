import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
        <DashboardSidebar />
        <main className="flex flex-col h-screen w-screen bg-muted">
            {children}
        </main>
    </SidebarProvider>
  )
}

export default DashboardLayout