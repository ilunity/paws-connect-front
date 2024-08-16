import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';

export interface ShelterDashboardLayoutProps {
  shelterId: string;
  dashboardItemName: `${SHELTER_DASHBOARD_ITEMS}`;
  children?: React.ReactNode;
}
