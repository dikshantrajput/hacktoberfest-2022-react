import { createSlice } from '@reduxjs/toolkit';


 const modeReducer = createSlice({
   name: "mode",
   initialState: { value: false },
   reducers: {
     switchMode: (state) => {state.value = !state.value},
   },
 });

export const {switchMode} = modeReducer.actions;
export default modeReducer.reducer;
