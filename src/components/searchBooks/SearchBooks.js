import React from "react";
import PropTypes from "prop-types";
import {
  SearchBookContainer,
  SearchBookInputBox,
  SearchButton,
} from "./SearchBooks.style";

const SearchBooks = (props) => {
  return (
    <SearchBookContainer>
      <SearchBookInputBox placeholder="java" />
      <SearchButton>Search</SearchButton>
    </SearchBookContainer>
  );
};

SearchBooks.propTypes = {};

export default SearchBooks;
