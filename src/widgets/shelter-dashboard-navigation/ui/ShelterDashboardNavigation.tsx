import React from 'react';
import {
  dashboardItem2Href,
  SHELTER_DASHBOARD_ITEMS,
  ShelterDashboardNavigationProps,
} from './ShelterDashboardNavigation.types';
import { Menu, MenuProps } from 'antd';
import { InfoOutlined, ReadOutlined, ScheduleOutlined, TeamOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

const ownerItems: MenuItem[] = [
  {
    key: SHELTER_DASHBOARD_ITEMS.INFO,
    label: 'Информация',
    icon: <InfoOutlined />,
  },
  {
    key: SHELTER_DASHBOARD_ITEMS.SCHEDULE,
    label: 'Расписание',
    icon: <ScheduleOutlined />,
  },
  {
    key: SHELTER_DASHBOARD_ITEMS.WORKERS,
    label: 'Сотрудники',
    icon: <TeamOutlined />,
  },
];

const workersItems: MenuItem[] = [
  {
    key: SHELTER_DASHBOARD_ITEMS.ANIMALS,
    label: 'Питомцы',
    icon: <ReadOutlined />,
  },
];

export const ShelterDashboardNavigation: React.FC<ShelterDashboardNavigationProps> = ({ owner, selected }) => {
  const router = useRouter();
  const pathname = usePathname();
  const baseDashboardPathname = pathname.split('/').slice(0, -2).join('/');

  const items = owner ? [...ownerItems, ...workersItems] : workersItems;

  const handleClick = ({ key }) => {
    const dashboardItemHref = dashboardItem2Href(key);
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
