export interface NavigationRoute {
  href: string;
  title: string;
  mobile?: boolean;
}

export const navigationRoutes: NavigationRoute[] = [
  {
    href: '/',
    title: 'Начальная страница',
    mobile: true,
  },
  {
    href: '/animals',
    title: 'Животные',
  },
  {
    href: '/shelters',
    title: 'Приюты',
  },
];
