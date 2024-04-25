import compose from 'compose-function';
import { withAuth } from 'src/app/providers/auth';
import { ConfigProvider } from 'src/app/providers/config';

export const withProviders = compose(withAuth, ConfigProvider);
