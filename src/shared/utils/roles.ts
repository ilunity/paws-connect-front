import { ClerkMetadata } from '@shared/types/globals';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';
import type { NextApiRequest } from 'next';
import type { IncomingMessage } from 'http';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { useUser } from '@clerk/nextjs';

type GsspRequest = IncomingMessage & {
  cookies: NextApiRequestCookies;
};
export type RequestLike = NextRequest | NextApiRequest | GsspRequest;

export const isShelterOwner = (req: RequestLike, shelterId: string) => {
  return getClerkMetadata(req).shelterOwner?.includes(String(shelterId)) || false;
};

export const isShelterWorker = (req: RequestLike, shelterId: string) => {
  return getClerkMetadata(req).shelterWorker?.includes(String(shelterId));
};

export const getClerkMetadata = (req: RequestLike) => {
  const { sessionClaims } = getAuth(req);

  return sessionClaims?.metadata as ClerkMetadata;
};


type UseUserMetadata = {
  isLoaded: false;
  metadata: undefined;
  isShelterOwner: undefined;
  isShelterWorker: undefined;
} | {
  isLoaded: true;
  metadata: ClerkMetadata;
  isShelterOwner: (shelterId: string) => boolean;
  isShelterWorker: (shelterId: string) => boolean;
}

export const useUserMetadata = (): UseUserMetadata => {
  const { user, isLoaded } = useUser();

  const isShelterOwner = (shelterId: string) => {
    return user?.publicMetadata.shelterOwner.includes(String(shelterId)) || false;
  };

  const isShelterWorker = (shelterId: string) => {
    return user?.publicMetadata.shelterWorker.includes(String(shelterId)) || false;
  };

  return {
    isLoaded,
    metadata: isLoaded ? user?.publicMetadata as ClerkMetadata : undefined,
    isShelterOwner: isLoaded ? isShelterOwner : undefined,
    isShelterWorker: isLoaded ? isShelterWorker : undefined,
  } as UseUserMetadata;
};
