type IProcessEnv = string;

export const HOST: IProcessEnv = process.env.HOST || '';
export const PORT: IProcessEnv = process.env.PORT || '';
export const APP_TOKEN: IProcessEnv = process.env.APP_TOKEN || '';
export const API_DOMAIN: IProcessEnv = process.env.API_DOMAIN || '';
export const API_SCOPE: IProcessEnv = process.env.API_SCOPE || '';
export const ACCESS_KEY: IProcessEnv = process.env.ACCESS_KEY || '';
export const SECRET_KEY: IProcessEnv = process.env.SECRET_KE || '';
