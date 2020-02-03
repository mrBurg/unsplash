export enum URLS {
  HOME = '/',
  SIGNUP = '/signup',
  SIGNIN = '/signin',
  USER_PAGE = '/user'
}

export interface IRouter {
  router: URLS;
  alias: string;
  title: string;
  isProtected?: boolean;
}

export const routes: Array<IRouter> = [
  {
    router: URLS.SIGNUP,
    alias: 'signup',
    title: 'Signup'
  },
  {
    router: URLS.SIGNIN,
    alias: 'signin',
    title: 'Signin'
  },
  {
    router: URLS.USER_PAGE,
    isProtected: true,
    alias: 'user',
    title: 'User'
  }
];
