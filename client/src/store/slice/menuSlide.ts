import { createSlice } from "@reduxjs/toolkit";
type MenuState = {
  isOpen: boolean;
};
const initialState: MenuState = {
  isOpen: true,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
