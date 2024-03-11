import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    is_first_open: true,
    is_premium: false,
    paywall_show_time: 0,
  },
  reducers: {
    setIsFirstOpen(state, action: PayloadAction<boolean>) {
      state.is_first_open = action.payload;
    },
    setIsPremium(state, action: PayloadAction<boolean>) {
      state.is_premium = action.payload;
    },
    increasePaywallShowTime(state) {
      state.paywall_show_time += 1;
    },
  },
});

export const { setIsFirstOpen, setIsPremium, increasePaywallShowTime } =
  settingsSlice.actions;

export default settingsSlice.reducer;
