import React from 'react';

type CardVariant = 'dark' | 'success' | 'info' | 'mute' | 'primary';

type DarkCardProps = React.ComponentProps<'div'> & {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<CardVariant, string> = {
  dark: 'bg-neutral-700 border border-neutral-100 text-slate-100',
  success: 'bg-green-900 border border-green-600 text-green-100',
  info: 'bg-blue-900 border border-blue-600 text-blue-100',
  mute: 'bg-neutral-800 border border-neutral-600 text-neutral-200',
  primary: 'bg-indigo-900 border border-indigo-600 text-indigo-100',
};

export const DarkCard: React.FC<DarkCardProps> = ({
  variant = 'dark',
  className = '',
  children,
  ...rest
}) => (
  <div
    className={`${variantClasses[variant]} rounded-lg shadow-md ${className}`}
    {...rest}
  >
    {children}
  </div>
);

type DarkContentProps = React.ComponentProps<'div'> & {
  className?: string;
  children: React.ReactNode;
};

export const DarkContent: React.FC<DarkContentProps> = ({
  className = '',
  children,
  ...rest
}) => (
  <div className={`p-4 ${className}`} {...rest}>
    {children}
  </div>
);

export default DarkCard;