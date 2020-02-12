export interface IRouter {
  router: URLS;
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
    router: URLS.USER_PAGE,
    isProtected: true,
    alias: 'user',
    title: 'User'
  },
  {
    router: URLS.SIGNUP,
    alias: 'signup',
    title: 'Signup',
    isHidden: true
  },
  {
    router: URLS.SIGNIN,
    alias: 'signin',
    title: 'Signin'
  }
];
