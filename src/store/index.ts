import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import formReducer from './formSlice'

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
