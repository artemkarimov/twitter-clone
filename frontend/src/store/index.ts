import { configureStore } from '@reduxjs/toolkit';

import loginSlice from 'store/Login/loginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
