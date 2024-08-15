import { ROLES } from '@shared/types/index';

export interface ClerkMetadata {
  roles?: `${ROLES}`[];
  shelterOwner: string[];
  shelterWorker: string[];
}

declare global {
  interface CustomJwtSessionClaims {
    metadata: ClerkMetadata;
  }
}

