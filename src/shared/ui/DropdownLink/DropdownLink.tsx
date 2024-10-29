import React from 'react';
import { DropdownLinkProps } from './DropdownLink.types';
import { useDynamicTokenStyles } from './DropdownLink.styles';
import NextLink from 'next/link';
import { Typography } from 'antd';


const { Text } = Typography;

export const DropdownLink: React.FC<DropdownLinkProps> = ({ title, href }) => {
  const { styles } = useDynamicTokenStyles();

  return (
    <NextLink
      href={ href }
      passHref
    >
      <Text className={ styles.dropdownLink }>
        { title }
      </Text>
    </NextLink>
  );
};
