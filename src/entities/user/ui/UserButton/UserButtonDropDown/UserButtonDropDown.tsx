import React from 'react';
import { UserButtonDropDownProps } from './UserButtonDropDown.types';
import { useStyles } from './UserButtonDropDown.styles';
import { Dropdown, MenuProps } from 'antd';
import { Link, SignOutButton } from '@shared/ui';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href={ '/profile' }>
        Профиль
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <SignOutButton />
    ),
  },
];

export const UserButtonDropDown: React.FC<UserButtonDropDownProps> = ({ children }) => {
  const { styles } = useStyles();

  return (
    <Dropdown
      placement={ 'bottomLeft' }
      menu={ { items } }
      dropdownRender={ (menu) =>
        React.cloneElement(menu as React.ReactElement, { className: styles.container })
      }
    >
      { children }
    </Dropdown>
  );
};
