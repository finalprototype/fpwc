import actions from '../constants/actionTypes';

export interface BackgroundReducerState {
  imageSource?: string;
  videoSource?: string;
}

export interface BackgroundReducerAction {
  type: string;
  payload?: { [key: string]: string|undefined };
}

export const getInitialState = (): BackgroundReducerState => ({
  imageSource: undefined,
  videoSource: undefined,
});

export const backgroundReducer = (
  state: BackgroundReducerState = getInitialState(),
  action: BackgroundReducerAction,
): BackgroundReducerState => {
  switch (action.type) {
    case actions.BACKGROUND_CHANGE:
      return {
        ...state,
        ...(action.payload || {}),
      };

    case actions.BACKGROUND_CLEAR:
      return getInitialState();

    default:
      return state;
  }
};

export default backgroundReducer;
