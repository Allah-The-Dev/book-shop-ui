import { useSelector, useDispatch } from "react-redux";
import { selectBooks, addBooks } from "../../features/books/booksSlice";
import {
  Book,
  BookImage,
  BookTitle,
  BookAuthor,
  BooksContainer,
  BuyNowButton,
  AddToCardButton,
  BookImageContainer,
  BookDetailsAndActionsContainer,
  BookDetailsContainer,
  ActionOnBookContainer,
  BookPrice,
} from "./Books.style";
import { useEffect } from "react";
import SearchBooks from "../searchBooks";

function Books() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    const intializeBooks = async () => {
      const books = await loadBooks();
      dispatch(addBooks(books));
    };
    intializeBooks();
  }, [dispatch]);

  return (
    <BooksContainer>
      <SearchBooks />
      {books  && books.length ? (
        books.map((book) => (
          <Book key={book.isbn}>
            <BookImageContainer>
              <BookImage alt={book.bookName} />
            </BookImageContainer>
            <BookDetailsAndActionsContainer>
              <BookDetailsAndActionsContainer>
                <BookDetailsContainer>
                  <BookTitle>Title : {book.bookName}</BookTitle>
                  <BookAuthor>Author : {book.author}</BookAuthor>
                  <BookPrice>Price : {book.price}</BookPrice>
                </BookDetailsContainer>
                <ActionOnBookContainer>
                  <BuyNowButton disabled={book.numberOfAvailableBooks <= 0}>
                    Buy Now
                  </BuyNowButton>
                  <AddToCardButton disabled={book.numberOfAvailableBooks <= 0}>
                    Add to Cart
                  </AddToCardButton>
                </ActionOnBookContainer>
              </BookDetailsAndActionsContainer>
            </BookDetailsAndActionsContainer>
          </Book>
        ))
      ) : (
        <h1>No books to show</h1>
      )}
    </BooksContainer>
  );
}

export default Books;

export const loadBooks = async () => {
  const response = await fetch("http://localhost:9090/books");
  return response.json();
};
