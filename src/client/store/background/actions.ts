import Types, { BackgroundAction } from './types';

export const updateBackground = (
  imageSource: string,
  videoSource?: string,
): BackgroundAction => ({
  type: Types.BACKGROUND_CHANGE,
  payload: { imageSource, videoSource },
});

export const clearBackground = (): BackgroundAction => ({
  type: Types.BACKGROUND_CLEAR,
});
