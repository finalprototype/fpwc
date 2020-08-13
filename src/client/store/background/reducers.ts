import Types, {
  BackgroundState,
  BackgroundAction,
} from './types';

export const getInitialState = (): BackgroundState => ({
  imageSource: undefined,
  videoSource: undefined,
});

export const backgroundReducer = (
  state: BackgroundState = getInitialState(),
  action: BackgroundAction,
): BackgroundState => {
  switch (action.type) {
    case Types.BACKGROUND_CHANGE:
      return {
        ...state,
        ...(action.payload || {}),
      };

    case Types.BACKGROUND_CLEAR:
      return getInitialState();

    default:
      return state;
  }
};

export default backgroundReducer;
