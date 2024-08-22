import { ReactNode } from 'react';

export interface LayoutProps {
  aside?: ReactNode;
  children: ReactNode;
  loading?: boolean;
  contentClassName?: string;
}
