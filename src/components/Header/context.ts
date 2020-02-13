import { createContext } from 'react';

export interface IHeaderCtx {
  token: string;
}

const HeaderCtx = createContext<IHeaderCtx>({
  token: ''
});

export const HeaderCtxProvider = HeaderCtx.Provider;
export const HeaderCtxConsumer = HeaderCtx.Consumer;
