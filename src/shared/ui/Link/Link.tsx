import React from 'react';
import { LinkProps } from './Link.types';
import NextLink from 'next/link';
import { Typography } from 'antd';
import { useStyles } from './Link.styles';


export const Link: React.FC<LinkProps> = (
  {
    href,
    children,
    buttonLink = false,
  },
) => {
  const { styles } = useStyles();

  return (
    <NextLink href={ href } passHref>
      { buttonLink
        ? (
          <Typography className={ styles.buttonLink }>
            { children }
          </Typography>
        )
        : (
          <Typography className={ styles.textLink }>
            { children }
          </Typography>
        )
      }
    </NextLink>
  );
};
