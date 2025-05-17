import React from 'react';

type GridLayoutProps = {
  columns?: number;
  rows?: number;
  children: React.ReactNode[];
  className?: string;
};

const GridLayout: React.FC<GridLayoutProps> = ({
  columns = 3,
  rows = 1,
  children,
  className = '',
}) => {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;