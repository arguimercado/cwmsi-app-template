import React from 'react';

type FlexLayoutProps = React.ComponentProps<'div'> & {
   orientation?: 'horizontal' | 'vertical';
   direction?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
   align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
   gap?: string; // e.g., "gap-2", "gap-4"
   className?: string;
   enabledBorder?: boolean;
   children: React.ReactNode;
};

const orientationMap = {
   horizontal: 'flex-row',
   vertical: 'flex-col',
};

const justifyMap = {
   start: 'justify-start',
   center: 'justify-center',
   end: 'justify-end',
   between: 'justify-between',
   around: 'justify-around',
   evenly: 'justify-evenly',
};

const alignMap = {
   start: 'items-start',
   center: 'items-center',
   end: 'items-end',
   stretch: 'items-stretch',
   baseline: 'items-baseline',
};

export const FlexLayout: React.FC<FlexLayoutProps> = ({
   orientation = 'horizontal',
   direction = 'start',
   align = 'start',
   gap = '',
   className = '',
   children,
   enabledBorder = false,
   ...rest
}) => {
   const flexDirection = orientationMap[orientation];
   const justifyClass = justifyMap[direction];
   const alignClass = alignMap[align];

   return (
      <div className={`flex ${flexDirection} ${justifyClass} ${alignClass} ${gap} ${className} ${enabledBorder ? 'border border-gray-300 rounded-lg p-4' : ''}`} {...rest}>
         {children}
      </div>
   );
};

export default FlexLayout;