import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRemoteConfig } from "../../models/RemoteConfig";

const initialConfig: IRemoteConfig = {
  isAppStateOpen: false,
};

const remoteConfigSlice = createSlice({
  name: "remoteConfig",
  initialState: {
    remoteConfig: initialConfig,
  },
  reducers: {
    setRemoteConfig(state, action: PayloadAction<IRemoteConfig>) {
      state.remoteConfig = action.payload;
    },
  },
});

export const { setRemoteConfig } = remoteConfigSlice.actions;

export default remoteConfigSlice.reducer;
