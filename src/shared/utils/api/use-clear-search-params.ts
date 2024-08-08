import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export const useClearSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();

  return () => {
    router.push(pathname as Url);
  };
};
