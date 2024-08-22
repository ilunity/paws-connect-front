interface NavigationRoute {
  href: string;
  title: string;
}

export const firstLevelNavigationRoutes: NavigationRoute[] = [
  {
    href: '/animals',
    title: 'Животные',
  },
  {
    href: '/shelters',
    title: 'Приюты',
  },
];
