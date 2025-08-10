import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchFormState {
  isOpen: boolean;
  searchQs: string; // stores the search query
}

const initialState: SearchFormState = {
  isOpen: false,
  searchQs: "",
};

const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    toggleSearchForm: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSearchForm: (state) => {
      state.isOpen = true;
    },
    closeSearchForm: (state) => {
      state.isOpen = false;
    },
    setSearchQs: (state, action: PayloadAction<string>) => {
      state.searchQs = action.payload;
    },
    clearSearchQs: (state) => {
      state.searchQs = "";
    },
  },
});

export const {
  toggleSearchForm,
  openSearchForm,
  closeSearchForm,
  setSearchQs,
  clearSearchQs,
} = searchFormSlice.actions;

export default searchFormSlice;
