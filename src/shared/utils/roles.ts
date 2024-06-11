import { ClerkMetadata, ROLES } from '@shared/types/globals';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';
import type { NextApiRequest } from 'next';
import type { IncomingMessage } from 'http';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';

type GsspRequest = IncomingMessage & {
  cookies: NextApiRequestCookies;
};
export type RequestLike = NextRequest | NextApiRequest | GsspRequest;

export const checkRoles = (req: RequestLike, roles: `${ROLES}`[]) => {
  const suitableRoleIndex = getClerkMetadata(req).roles?.findIndex(role => roles.includes(role));
  return suitableRoleIndex && suitableRoleIndex !== -1;
};

export const isShelterOwner = (req: RequestLike, shelterId: number) => {
  return getClerkMetadata(req).shelterOwner?.includes(shelterId) || false;
};

export const isShelterWorker = (req: RequestLike, shelterId: number) => {
  return getClerkMetadata(req).shelterWorker?.includes(shelterId);
};

export const getClerkMetadata = (req: RequestLike) => {
  const { sessionClaims } = getAuth(req);

  return sessionClaims?.metadata as ClerkMetadata;
};
