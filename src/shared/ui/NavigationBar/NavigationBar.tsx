import React from 'react';
import { Space } from 'antd';
import { Link } from '@shared/ui';
import { firstLevelNavigationRoutes } from './first-level-navigation-routes';

export const NavigationBar: React.FC = () => {

  return (
    <Space>
      {
        firstLevelNavigationRoutes.map((route) => (
          <Link
            key={ route.href }
            href={ route.href }
            buttonLink
          >
            { route.title }
          </Link>
        ))
      }
    </Space>
  );
};
