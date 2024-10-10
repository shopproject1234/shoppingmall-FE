import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
        userId: '',
        nickname: ''
    },
  },
  reducers: {
    login: (state, action) => {
      console.log('action.payload   >> ', action.payload);
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = {
        userId: '',
        nickname: ''
      };
    },
    updateUserProfile: (state, action) => {
      const _old = state.userInfo;
      const _new = action.payload;
      console.log('spread : ', { ..._old, ..._new });
      state.userInfo = { ..._old, ..._new };
    },
  },
});

export const { login, logout, updateUserProfile } =
  userSlice.actions;

export default userSlice.reducer;