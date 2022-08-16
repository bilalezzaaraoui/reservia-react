import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    createActivity: (state, action) => {
      state.data = action.payload;
    },
    deleteAllActivity: (state) => {
      state.data = [];
    },
  },
});

export const ActivityAction = activitySlice.actions;

export default activitySlice.reducer;
