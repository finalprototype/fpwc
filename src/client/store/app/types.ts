import keyMirror from '../../utils/keyMirror';

export default keyMirror([
  'APP_INIT_CONFIG',
]);

// Interfaces
export interface AppState {
  env: string;
  version: string;
  assets_path: string;
  manifest: { [key: string]: string|string[] };
  flags: string[];
}

export interface AppAction {
  type: string;
  payload?: { [key: string]: string|undefined };
}
