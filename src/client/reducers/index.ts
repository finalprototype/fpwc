import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './app';
import BackgroundReducer from './background';

const store = configureStore({
  reducer: {
    app: AppReducer,
    background: BackgroundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
