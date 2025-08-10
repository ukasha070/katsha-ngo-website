import { createSlice } from "@reduxjs/toolkit";

interface donationFormVisibleState {
  isOpen: boolean;
}

const initialState: donationFormVisibleState = {
  isOpen: false,
};
const donationFormSlice = createSlice({
  name: "donationForm",
  initialState,
  reducers: {
    toggleDonationForm: (state) => {
      state.isOpen = !state.isOpen;
    },
    openDonationForm: (state) => {
      state.isOpen = true;
    },
    closeDonationForm: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleDonationForm, openDonationForm, closeDonationForm } =
  donationFormSlice.actions;
export default donationFormSlice;
