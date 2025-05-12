import React from "react";
import { type FieldValues, type Path, type Control, Controller, useFormContext } from "react-hook-form";
import { cn } from "~/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "~/components/ui/form";
import { cva } from "class-variance-authority";
import type { SelectOption } from "~/lib/types/data-control";

const selectVariants = cva(
  "pr-10",
  {
    variants: {
      variant: {
        default: "",
        outline: "border",
        ghost: "bg-transparent shadow-none focus-visible:ring-0",
        underline: "border-b-2 border-b-primary focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-b-primary",
      },
      hasIcon: {
        true: "pl-10",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);



export type FormSelectFieldProps<T extends FieldValues> = {
  label?: string;
  icon?: React.ReactNode;
  variant?: "outline" | "default" | "ghost" | "underline";
  name: Path<T>;
  description?: string;
  control?: Control<T>;
  className?: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  [key: string]: any;
};

function CWMSSelectField<T extends FieldValues>({
  label,
  icon,
  variant = "default",
  name,
  description,
  control: propControl,
  className,
  options,
  placeholder,
  disabled,
  ...props
}: FormSelectFieldProps<T>) {
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
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={disabled}
                {...props}
              >
                <SelectTrigger
                  id={name}
                  className={cn(selectVariants({ variant, hasIcon }), className)}
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

export default CWMSSelectField;