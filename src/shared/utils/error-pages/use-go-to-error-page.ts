import { useRouter } from 'next/router';

export enum ERROR_PAGE {
  FORBIDDEN = 'FORBIDDEN',
}

export const errorPageHref: Record<`${ERROR_PAGE}`, string> = {
  [ERROR_PAGE.FORBIDDEN]: 'forbidden',
}

export const useGoToErrorPage = (type: `${ERROR_PAGE}`, withReplace= false) => {
  const router = useRouter();

  const errorPageUrl = `/errors/${errorPageHref[type]}`;
  const routerFunction = withReplace ? router.replace : router.push;

  return () => routerFunction(errorPageUrl);
};
