import React from 'react';
import { PhoneNumberLinkProps } from './PhoneNumberLink.types';
import { Typography } from 'antd';
import { useStyles } from './PhoneNumberLink.styles';

const { Link } = Typography;

export const PhoneNumberLink: React.FC<PhoneNumberLinkProps> = (
  {
    phoneNumber,
    content,
    className,
    size = 'large',
  },
) => {
  const { styles } = useStyles({size});

  return (
    <Link href={ `tel:${phoneNumber}` } className={ `${styles.linkText} ${className}` }>
      { content || phoneNumber }
    </Link>
  );
};
