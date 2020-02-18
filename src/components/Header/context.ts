import { createContext } from 'react';

export interface IHeaderCtx {
  token: string;
}

export const HeaderCtx = createContext<IHeaderCtx>({
  token: ''
});

export const HeaderCtxProvider = HeaderCtx.Provider;
export const HeaderCtxConsumer = HeaderCtx.Consumer;
