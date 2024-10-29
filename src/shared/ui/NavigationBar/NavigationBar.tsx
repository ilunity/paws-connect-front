import React from 'react';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import { DropdownLink, Link } from '@shared/ui';
import { navigationRoutes } from './navigation-routes';
import { useResponsive } from 'antd-style';
import { MenuOutlined } from '@ant-design/icons';
import { NavigationBarProps } from '@shared/ui/NavigationBar/NavigationBar.types';


export const NavigationBar: React.FC<NavigationBarProps> = ({ dropdown }) => {
  const { lg } = useResponsive();

  if (dropdown) {
    const items: MenuProps['items'] = navigationRoutes.map((route) => ({
      key: route.href,
      label: (<DropdownLink title={ route.title } href={ route.href } />),
    }));

    return (
      <div>
        <Dropdown
          placement={ 'bottomLeft' }
          menu={ { items } }
        >
          <Button
            type={ 'primary' }
            icon={ <MenuOutlined /> }
          >
            Меню
          </Button>
        </Dropdown>
      </div>
    );
  }


  const notMobileRoutes = navigationRoutes.filter((route) => !route.mobile);

  return (
    <Space size={ 'middle' }>
      {
        notMobileRoutes.map((route) => (
          <Link
            key={ route.href }
            href={ route.href }
            size={ lg ? 'large' : 'default' }
            buttonLink
          >
            { route.title }
          </Link>
        ))
      }
    </Space>
  );
};
