import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBooks: (state, action) => {
      return {
        books: [...action.payload.books],
      };
    },
  },
});

export const { addBooks } = booksSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.books.books)`
export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;
