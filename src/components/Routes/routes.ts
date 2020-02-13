export interface IRouter {
  href: URLS;
  alias: string;
  title: string;
  isProtected?: boolean;
  isHidden?: boolean;
}

export enum URLS {
  HOME = '/',
  SIGNUP = '/signup',
  SIGNIN = '/signin',
  USER_PAGE = '/user'
}

export const routes: Array<IRouter> = [
  {
    href: URLS.USER_PAGE,
    isProtected: true,
    alias: 'user',
    title: 'User'
  },
  {
    href: URLS.SIGNUP,
    alias: 'signup',
    title: 'Signup'
  },
  {
    href: URLS.SIGNIN,
    alias: 'signin',
    title: 'Signin',
    isHidden: true
  }
];
