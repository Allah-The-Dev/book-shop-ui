import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  SearchBookContainer,
  SearchBookInputBox,
} from "./SearchBooks.style";
import {
  selectSearchText,
  updateSearchText,
} from "../../features/searchBooks/searchBooksSlice";
import { loadBooks } from "../../service/bookService";
import { addBooks } from "../../features/books/booksSlice";
import BaseButton from "../baseButton";

const SearchBooks = () => {
  const searchText = useSelector(selectSearchText);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchBooks = async () => {
    try {
      const searchResult = await loadBooks(searchText);
      dispatch(addBooks(searchResult));
      navigate(`/books?search=${searchText}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SearchBookContainer>
      <SearchBookInputBox
        type="text"
        value={searchText || searchParams.get("search") || ""}
        onChange={(e) => dispatch(updateSearchText(e.target.value))}
        placeholder="java"
      />
      <BaseButton onClick={searchBooks}>Search</BaseButton>
    </SearchBookContainer>
  );
};

SearchBooks.propTypes = {};

export default SearchBooks;
