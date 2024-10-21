import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FormState {
  businessName: string;
}

const initialState: FormState = {
  businessName: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setBusinessName: (state, action: PayloadAction<string>) => {
      state.businessName = action.payload;
    },
  },
});

export const { setBusinessName } = formSlice.actions;
export default formSlice.reducer;