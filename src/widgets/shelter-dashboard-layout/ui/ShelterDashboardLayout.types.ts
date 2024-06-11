import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';

export interface ShelterDashboardLayoutProps {
  dashboardItemName: `${SHELTER_DASHBOARD_ITEMS}`;
  isOwner?: boolean;
  children?: React.ReactNode;
}
