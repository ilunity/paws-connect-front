export { default } from '@app/middlewares';

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
