import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { BellIcon } from "lucide-react";

const CWMSINotification = () => {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button variant={"ghost"}  className="relative size-8 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
               <BellIcon />
               <div className="bottom-0 right-0 size-[14px] absolute bg-red-400 text-white text-xs rounded-full">2</div>
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-80">
            <div className="space-y-2">
               <h4 className="font-medium leading-none">Notification</h4>
               <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
               </p>
            </div>
         </PopoverContent>
      </Popover>
   );
};

export default CWMSINotification;
