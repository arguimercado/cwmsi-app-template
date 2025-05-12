import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "~/lib/utils";

interface IButtonProps extends React.ComponentProps<"button"> {
   variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
   size?: "default" | "sm" | "lg" | "icon";
   asChild?: boolean;
   isLoading?: boolean;
   loadingText?: string;
   className?: string;
}

const CWMSIButton = (props: IButtonProps) => {
   return (
      <Button
         disabled={props.isLoading}  
         variant={props.variant} 
         size={props.size} {...props}>
         {props.isLoading ? (
            <div className="flex items-center justify-center">
               <Loader2 className="animate-spin mr-2 h-4 w-4" />
               <span>{props.loadingText}</span>
            </div>
         ) : (
            <>{props.children}</>
         )}
      </Button>
   );
};

export default CWMSIButton;
