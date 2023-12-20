import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import searchBooksReducer from "../features/searchBooks/searchBooksSlice";

export default configureStore({
  reducer: {
    books: booksReducer,
    searchBooks: searchBooksReducer,
  },
});
