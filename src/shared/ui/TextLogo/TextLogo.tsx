import React from 'react';
import { TextLogoProps } from './TextLogo.types';
import { useStyles } from './TextLogo.styles';
import Icon from '@ant-design/icons';
import LogoIcon from '../../../../public/icons/logo.svg';
import { Typography } from 'antd';


const { Text } = Typography;

export const TextLogo: React.FC<TextLogoProps> = () => {
  const { styles } = useStyles();

  return (
    <Typography>
      <Icon
        className={ styles.logoIcon }
        component={ LogoIcon }
      />
      <Text className={ styles.logo }>
        PawsConnect
      </Text>
    </Typography>
  );
};
