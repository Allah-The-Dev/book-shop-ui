import { createSlice } from "@reduxjs/toolkit";

export const searchBooks = createSlice({
  name: "searchBooks",
  initialState: {
    searchText: "",
  },
  reducers: {
    updateSearchText: (state, action) => {
      return {
        searchText : action.payload,
      };
    },
  },
});

export const { updateSearchText } = searchBooks.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.books.books)`
export const selectSearchText = (state) => state.searchBooks.searchText;

export default searchBooks.reducer;
