import keyMirror from '../../utils/keyMirror';

export default keyMirror([
  'BACKGROUND_CHANGE',
  'BACKGROUND_CLEAR',
]);

// Interfaces
export interface BackgroundState {
  imageSource?: string;
  videoSource?: string;
}

export interface BackgroundAction {
  type: string;
  payload?: { [key: string]: string|undefined };
}
