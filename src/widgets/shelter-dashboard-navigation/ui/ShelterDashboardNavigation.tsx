import React from 'react';
import {
  dashboardItem2Href,
  SHELTER_DASHBOARD_ITEMS,
  ShelterDashboardNavigationProps,
} from './ShelterDashboardNavigation.types';
import { Menu, MenuProps } from 'antd';
import { InfoOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import PawOutlined from 'public/icons/paw-outlined.svg';

type MenuItem = Required<MenuProps>['items'][number];

const ownerItems: MenuItem[] = [
  {
    key: SHELTER_DASHBOARD_ITEMS.INFO,
    label: 'Информация',
    icon: <InfoOutlined />,
  },
];

const workersItems: MenuItem[] = [
  {
    key: SHELTER_DASHBOARD_ITEMS.ANIMALS,
    label: 'Питомцы',
    icon: <PawOutlined />,
  },
];

export const ShelterDashboardNavigation: React.FC<ShelterDashboardNavigationProps> = ({ owner, selected }) => {
  const router = useRouter();
  const pathname = usePathname();
  const baseDashboardPathname = pathname!.split('/').slice(0, -1).join('/');

  const items = owner ? [...ownerItems, ...workersItems] : workersItems;

  const handleClick = ({ key }: { key: string }) => {
    const dashboardItemHref = dashboardItem2Href(key as `${SHELTER_DASHBOARD_ITEMS}`);
    router.replace({ pathname: `${baseDashboardPathname}/${dashboardItemHref}` });
  };

  return (
    <Menu
      onClick={ handleClick }
      selectedKeys={ [selected] }
      mode="inline"
      items={ items }
      theme={ 'dark' }
    />
  );
};
