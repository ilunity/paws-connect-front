import React from 'react';
import {
  dashboardItemHref,
  SHELTER_DASHBOARD_ITEMS,
  ShelterDashboardNavigationProps,
} from './ShelterDashboardNavigation.types';
import { Menu, MenuProps } from 'antd';
import Icon, { InfoOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
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
    icon: <Icon component={ PawOutlined }/>,
    children: [
      {
        key: SHELTER_DASHBOARD_ITEMS.ANIMALS_LIST,
        label: 'Список',
      },
      {
        key: SHELTER_DASHBOARD_ITEMS.ANIMALS_CREATE,
        label: 'Добавить',
      },
    ],
  },
];

export const ShelterDashboardNavigation: React.FC<ShelterDashboardNavigationProps> = ({ owner, selected }) => {
  const router = useRouter();
  const params = useParams();

  const items = owner ? [...ownerItems, ...workersItems] : workersItems;

  const handleClick = ({ key }: { key: string }) => {
    const itemHref = dashboardItemHref[key as `${SHELTER_DASHBOARD_ITEMS}`];
    const url = `/shelters/${params?.shelterId}/dashboard/${itemHref}`;
    router.replace({ pathname: url });
  };

  return (
    <Menu
      onClick={ handleClick }
      selectedKeys={ [selected] }
      mode="horizontal"
      items={ items }
    />
  );
};
