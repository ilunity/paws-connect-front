import React from 'react';
import { LinkProps } from './Link.types';
import NextLink from 'next/link';
import { Typography } from 'antd';
import { useDynamicTokenStyles } from './Link.styles';


const {Text} = Typography

export const Link: React.FC<LinkProps> = (
  {
    href,
    children,
    buttonLink = false,
    size = 'default',
  },
) => {
  const { styles } = useDynamicTokenStyles({ size });

  return (
    <NextLink href={ href } passHref>
      { buttonLink
        ? (
          <Text className={ styles.buttonLink }>
            { children }
          </Text>
        )
        : (
          <Text className={ styles.textLink }>
            { children }
          </Text>
        )
      }
    </NextLink>
  );
};
