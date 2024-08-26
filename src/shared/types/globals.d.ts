import { USER_ROLES } from '@shared/types/index';

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

