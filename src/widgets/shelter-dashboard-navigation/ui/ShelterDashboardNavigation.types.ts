export enum SHELTER_DASHBOARD_ITEMS {
  INFO = 'INFO',
  ANIMALS = 'ANIMALS',
  ANIMALS_LIST = 'ANIMALS_LIST',
  ANIMALS_CREATE = 'ANIMALS_CREATE',
  ANIMALS_UPDATE = 'ANIMALS_UPDATE',
}

export const dashboardItemHref: Record<`${SHELTER_DASHBOARD_ITEMS}`, string> = {
  [SHELTER_DASHBOARD_ITEMS.INFO]: 'info',
  [SHELTER_DASHBOARD_ITEMS.ANIMALS]: 'animals',
  [SHELTER_DASHBOARD_ITEMS.ANIMALS_LIST]: 'animals',
  [SHELTER_DASHBOARD_ITEMS.ANIMALS_CREATE]: 'animals/create',
  [SHELTER_DASHBOARD_ITEMS.ANIMALS_UPDATE]: 'animals',
};

export interface ShelterDashboardNavigationProps {
  owner: boolean;
  selected: `${SHELTER_DASHBOARD_ITEMS}`;
}
