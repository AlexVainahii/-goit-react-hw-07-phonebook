import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, { payload }) => {
      return (state = payload);
    },
  },
});
export const { changeFilter } = filterSlice.actions;
