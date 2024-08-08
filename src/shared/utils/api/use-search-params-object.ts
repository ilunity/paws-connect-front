import { useSearchParams } from 'next/navigation';

export const useSearchParamsObject = (): Record<string, string> => {
  const params = useSearchParams();

  const paramsObj: Record<string, string> = {};

  if (params !== null) {
    Array.from(params.entries()).forEach(([k, v]) => {
      paramsObj[k] = v;
    });
  }

  return paramsObj;
};
