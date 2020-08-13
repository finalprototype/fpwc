import Types, { AppAction } from './types';

export const appInit = (): AppAction => ({
  type: Types.APP_INIT_CONFIG,
});
