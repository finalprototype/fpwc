import actions from '../constants/actionTypes';

export interface AppReducerState {
  env: string;
  version: string;
  assets_path: string;
  manifest: { [key: string]: string|string[] };
  flags: string[];
}

export interface AppReducerAction {
  type: string;
  payload?: { [key: string]: string|undefined };
}

export const getInitialState = (): AppReducerState => ({
  env: '',
  version: '',
  assets_path: '',
  manifest: {},
  flags: [],
});

const app = (
  state: AppReducerState = getInitialState(),
  action: AppReducerAction,
): AppReducerState => {
  switch (action.type) {
    case actions.APP_INIT_CONFIG:
      // TODO
      return state;

    default:
      return state;
  }
};

export default app;
