import { USER_ROLES } from '@shared/types/index';
import { GetServerSidePropsContext } from 'next';

export interface ClerkMetadata {
  roles?: `${USER_ROLES}`[];
  shelterOwner: string[];
  shelterWorker: string[];
}

declare global {
  interface CustomJwtSessionClaims {
    metadata: ClerkMetadata;
  }

  interface UserPublicMetadata extends ClerkMetadata {

  }
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    authorization?: boolean | undefined;
    request?: GetServerSidePropsContext['req'] | undefined;
  }
}
