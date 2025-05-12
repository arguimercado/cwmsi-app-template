import React from "react";
import { cn } from "~/lib/utils";

export const CWMSIHeader = ({ children,className, ...props }: React.ComponentProps<"div"> & {
   children: React.ReactNode,
   className?: string,
}) => (
  <div className={cn("w-full  py-2 flex items-center",className)} {...props}>
    {children}
  </div>
);

export const CWMSIContent = ({ children,className, ...props }: React.ComponentProps<"div"> & {
   children: React.ReactNode,
   className?: string,
}) => (
  <div className={cn("w-full flex-1 ",className)} {...props}>
    {children}
  </div>
);

const CWMSICollectionPanel = ({ children,className, ...props }: React.ComponentProps<"div"> & {
   children: React.ReactNode,
   className?: string,
}) => {
  // Find header and content among children
  const header = React.Children.toArray(children).find(
    (child: any) => child.type === CWMSIHeader
  );
  const content = React.Children.toArray(children).find(
    (child: any) => child.type === CWMSIContent
  );

  return (

    <div className={cn("w-full flex flex-col space-y-2",className)}
      {...props}
    >
      {header}
      {content}
    </div>
  );
};

export default CWMSICollectionPanel;