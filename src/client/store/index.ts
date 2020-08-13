import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './app/reducers';
import BackgroundReducer from './background/reducers';
import SearchReducer from './search/reducers';

const store = configureStore({
  reducer: {
    app: AppReducer,
    background: BackgroundReducer,
    search: SearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
