import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  tasks: any;
  name: string;
}

const initialState: UserState = { name: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    resetState: () => initialState,
  },
});

export const { setName, resetState } = userSlice.actions;
export default userSlice.reducer;
