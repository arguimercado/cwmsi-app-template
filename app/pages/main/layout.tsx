import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from "~/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

import { Outlet } from "react-router";
import { Toaster } from "~/components/ui/sonner";
import Header from "./components/header";



const MainLayout = () => {
	
   return (
      <>
         <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
               <Header />
               <main className="flex flex-1 flex-col gap-4 p-4">
                  <Outlet />
               </main>
            </SidebarInset>
         </SidebarProvider>
         <Toaster />
      </>
   );
};

export default MainLayout;
