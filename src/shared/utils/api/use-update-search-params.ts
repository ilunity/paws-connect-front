import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';
import { Url } from 'next/dist/shared/lib/router/router';

export const useUpdateSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return (updatedQuery: Record<string, string>) => {
    const params = new URLSearchParams(searchParams || '');
    Object.keys(updatedQuery).forEach((key) => {
      if (updatedQuery[key]) {
        params.set(key, updatedQuery[key]);
      } else {
        params.delete(key);
      }
    });

    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath as Url);
  };
};
