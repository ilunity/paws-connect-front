export enum ROLES {
  USER = 'USER',
  SHELTER_WORKER = 'SHELTER_WORKER',
  SHELTER_OWNER = 'SHELTER_OWNER',
  MODERATOR = 'MODERATOR',
}

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
