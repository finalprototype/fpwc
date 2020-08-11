import actions from '../constants/actionTypes';
import { BackgroundReducerAction } from '../reducers/background';

export const updateBackground = (
  imageSource: string,
  videoSource?: string,
): BackgroundReducerAction => ({
  type: actions.BACKGROUND_CHANGE,
  payload: { imageSource, videoSource },
});

export const clearBackground = (): BackgroundReducerAction => ({
  type: actions.BACKGROUND_CLEAR,
});
