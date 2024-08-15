export enum SHELTER_DASHBOARD_ITEMS {
  INFO = 'INFO',
  ANIMALS = 'ANIMALS',
}

export const dashboardItem2Href = (itemName: `${SHELTER_DASHBOARD_ITEMS}`) => itemName.toLowerCase();

export interface ShelterDashboardNavigationProps {
  owner: boolean;
  selected: `${SHELTER_DASHBOARD_ITEMS}`;
}
