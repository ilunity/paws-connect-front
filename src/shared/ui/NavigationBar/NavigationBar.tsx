import React from 'react';
import { Space } from 'antd';
import { Link } from '@shared/ui';
import { firstLevelNavigationRoutes } from './first-level-navigation-routes';

export const NavigationBar: React.FC = () => {

  return (
    <Space size={ 'large' }>
      {
        firstLevelNavigationRoutes.map((route) => (
          <Link
            key={ route.href }
            href={ route.href }
            buttonLink
            size={ 'large' }
          >
            { route.title }
          </Link>
        ))
      }
    </Space>
  );
};
