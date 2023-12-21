import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SearchBookContainer,
  SearchBookInputBox,
  SearchButton,
} from "./SearchBooks.style";
import {
  selectSearchText,
  updateSearchText,
} from "../../features/searchBooks/searchBooksSlice";
import { loadBooks } from "../service/bookService";
import { addBooks } from "../../features/books/booksSlice";

const SearchBooks = () => {
  const searchText = useSelector(selectSearchText);
  const dispatch = useDispatch();

  const searchBooks = async () => {
    try {
      const searchResult = await loadBooks(searchText);
      dispatch(addBooks(searchResult));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SearchBookContainer>
      <SearchBookInputBox
        type="text"
        value={searchText}
        onChange={(e) => dispatch(updateSearchText(e.target.value))}
        placeholder="java"
      />
      <SearchButton onClick={searchBooks}>Search</SearchButton>
    </SearchBookContainer>
  );
};

SearchBooks.propTypes = {};

export default SearchBooks;
