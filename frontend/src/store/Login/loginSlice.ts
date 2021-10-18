import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from 'store/types';

const initialState: AuthState = {
  user: null,
  authenticated: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
});

export default loginSlice;
