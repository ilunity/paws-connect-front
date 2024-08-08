import { ROLES } from '@shared/types/index';

export interface ClerkMetadata {
  roles?: `${ROLES}`[];
  shelterOwner: number[];
  shelterWorker: number[];
}

declare global {
  interface CustomJwtSessionClaims {
    metadata: ClerkMetadata;
  }
}

