import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormStateProp = {
  businessName: string;
}

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
    setBusinessName: (state, action) => {
      state.businessName = action.payload.businessName;
    },
  },
});

export const { setBusinessName } = formSlice.actions;
export default formSlice.reducer;