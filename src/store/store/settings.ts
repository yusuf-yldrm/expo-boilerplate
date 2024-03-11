import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    test: "test",
  },
  reducers: {
    setTest(state, action: PayloadAction<string>) {
      state.test = action.payload;
    },
  },
});

export const { setTest } = settingsSlice.actions;

export default settingsSlice.reducer;
