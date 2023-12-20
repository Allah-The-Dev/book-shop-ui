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

const SearchBooks = () => {
  const searchText = useSelector(selectSearchText);
  const dispatch = useDispatch();

  return (
    <SearchBookContainer>
      <SearchBookInputBox
        type="text"
        value={searchText}
        onChange={(e) => dispatch(updateSearchText(e.target.value))}
        placeholder="java"
      />
      <SearchButton>Search</SearchButton>
    </SearchBookContainer>
  );
};

SearchBooks.propTypes = {};

export default SearchBooks;
