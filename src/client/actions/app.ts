import actions from '../constants/actionTypes';
import { AppReducerAction } from '../reducers/app';

export const appInit = (): AppReducerAction => ({
  type: actions.APP_INIT_CONFIG,
});
