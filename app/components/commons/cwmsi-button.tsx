import React from "react";
import { Button } from "../ui/button";
import { Loader2, Plus, Check, Pencil, RotateCcw } from "lucide-react";
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
  typeVariant?: "create" | "submit" | "edit" | "reset";
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variantLabel?: string;
}

const typeVariantMap: Record<
  NonNullable<IButtonProps["typeVariant"]>,
  { icon: React.ReactNode; label: string }
> = {
  create: { icon: <Plus className="mr-2 h-4 w-4" />, label: "Create" },
  submit: { icon: <Check className="mr-2 h-4 w-4" />, label: "Submit" },
  edit: { icon: <Pencil className="mr-2 h-4 w-4" />, label: "Edit" },
  reset: { icon: <RotateCcw className="mr-2 h-4 w-4" />, label: "Reset" },
};

const CWMSIButton = ({
  typeVariant,
  isLoading,
  loadingText,
  icon,
  children,
  variantLabel,
  ...props
}: IButtonProps) => {
  const predefined = typeVariant ? typeVariantMap[typeVariant] : null;

  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
          <span>{loadingText || (predefined && predefined.label) || children}</span>
        </div>
      ) : (
        <>
          {predefined ? (
            <div className="flex items-center gap-1">
              {predefined.icon}
              <span>{variantLabel ?? predefined.label}</span>
            </div>
          ) : (
            <>
              {icon}
              {children}
            </>
          )}
        </>
      )}
    </Button>
  );
};

export default CWMSIButton;
