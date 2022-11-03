import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logout,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [registration.pending]: state => {
      state.isLoading = true;
    },
    [registration.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [registration.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.isLoading = false;
      state.user = {
        name: '',
        email: '',
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
