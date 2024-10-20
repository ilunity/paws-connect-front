import { ReactNode } from 'react';

export interface LinkProps {
  href: string;
  children: ReactNode;
  buttonLink?: boolean;
  size?: 'default' | 'large';
}
