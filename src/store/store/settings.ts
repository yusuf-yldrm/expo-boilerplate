import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    is_first_open: true,
    is_premium: false,
  },
  reducers: {
    setIsFirstOpen(state, action: PayloadAction<boolean>) {
      state.is_first_open = action.payload;
    },
    setIsPremium(state, action: PayloadAction<boolean>) {
      state.is_premium = action.payload;
    },
  },
});

export const { setIsFirstOpen } = settingsSlice.actions;

export default settingsSlice.reducer;
