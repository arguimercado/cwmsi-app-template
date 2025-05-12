import React from "react";
import CWMSIAvatar from "~/components/commons/cwmsi-avatar";
import CWMSINotification from "~/components/commons/cwmsi-notification";
import { Separator } from "~/components/ui/separator";

import { SidebarTrigger } from "~/components/ui/sidebar";

const Header = () => {
   return (
      <header className="flex justify-between h-16 items-center gap-2 border-b px-4">
         <div className="flex shrink-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
               orientation="vertical"
               className="mr-2 data-[orientation=vertical]:h-4"
            />
         </div>
         <div className="flex items-center gap-2">
            <CWMSINotification />
            <CWMSIAvatar />

         </div>
      </header>
   );
};

export default Header;
