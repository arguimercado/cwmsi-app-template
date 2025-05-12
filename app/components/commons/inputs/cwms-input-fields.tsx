import React from "react";
import { type FieldValues, type Path, type Control, Controller, useFormContext } from "react-hook-form";
import { cn } from "~/lib/utils";
import { Input } from "~/components/ui/input";
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "pr-10 py-5 text-sm rounded-md transition-colors duration-200 ease-in-out ",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-900 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-b-primary",
        outline: "border ",
        ghost: "bg-transparent shadow-none focus-visible:ring-0 border-none focus-visible:border-b-2 focus-visible:border-b-primary",
        underline: "border-b-2 border-b-primary border-t-none  focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-b-primary",
      },
      hasIcon: {
        true: "pl-10",
      }
    },
    compoundVariants: [
      {
        variant: "underline",
        class: "focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-b-primary",
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  }
);

export type FormFieldProps<T extends FieldValues> = {
  label?: string;
  icon?: React.ReactNode;
  variant?: "outline" | "default" | "ghost" | "underline";
  name: Path<T>;
  description?: string;
  control?: Control<T>;
  className?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
  [key: string]: any;
};

function CWMSInputField<T extends FieldValues>({
  label,
  icon,
  variant = "default",
  name,
  description,
  control: propControl,
  className,
  ...props
}: FormFieldProps<T>) {
  const methods = useFormContext<T>();
  const control = propControl || methods.control;
  const hasIcon = !!icon;

  return (
    <FormItem>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <FormControl>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className="relative">
              {icon && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  {icon}
                </div>
              )}
              <Input
                id={name}
                className={cn(inputVariants({ variant, hasIcon }), className)}
                {...field}
                {...props}
              />
            </div>
          )}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

export default CWMSInputField;