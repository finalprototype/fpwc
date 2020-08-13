import Types, {
  AppState,
  AppAction,
} from './types';

export const getInitialState = (): AppState => ({
  env: '',
  version: '',
  assets_path: '',
  manifest: {},
  flags: [],
});

const app = (
  state: AppState = getInitialState(),
  action: AppAction,
): AppState => {
  switch (action.type) {
    case Types.APP_INIT_CONFIG:
      // TODO
      return state;

    default:
      return state;
  }
};

export default app;
