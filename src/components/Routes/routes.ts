export interface IRouter {
  href: URLS;
  alias: string;
  title: string;
  isProtected?: boolean;
  isHidden?: boolean;
}

export enum URLS {
  HOME = '/',
  SIGNIN = '/signin',
  USER = '/user',
  LOGOUT = '/logout',
  SIGNUP = '/signup',
  OAUTH = '/oauth'
}

export const routes: Array<IRouter> = [
  {
    href: URLS.SIGNIN,
    alias: 'signin',
    title: 'Signin',
    isHidden: true
  },
  {
    href: URLS.USER,
    alias: 'user',
    title: 'User',
    isProtected: true
  },
  {
    href: URLS.LOGOUT,
    alias: 'logout',
    title: 'Logout',
    isProtected: true
  },
  {
    href: URLS.SIGNUP,
    alias: 'signup',
    title: 'Signup'
  }
];
