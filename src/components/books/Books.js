import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectBooks, addBooks } from "../../features/books/booksSlice";
import {
  Book,
  BookImage,
  BookTitle,
  BookAuthor,
  HomePageContainer,
  BuyNowButton,
  AddToCardButton,
  BookImageContainer,
  BookDetailsAndActionsContainer,
  BookDetailsContainer,
  ActionOnBookContainer,
  BookPrice,
  BooksContainer,
  OutOfStockWarningText,
} from "./Books.style";
import { useEffect } from "react";
import { loadBooks } from "../../service/bookService";
import SearchBooks from "../searchBooks";

function Books() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const intializeBooks = async () => {
      try {
        const books = await loadBooks();
        dispatch(addBooks(books));
      } catch (error) {
        console.log(error);
      }
    };
    intializeBooks();
  }, [dispatch]);

  console.log(JSON.stringify(books));

  return (
    <HomePageContainer>
      <SearchBooks />
      <BooksContainer>
        {books && books.length ? (
          books.map((book) => (
            <Book key={book.isbn}>
              <BookImageContainer>
                <BookImage src={book.largeImageUrl} alt={book.bookName} />
              </BookImageContainer>
              <BookDetailsAndActionsContainer>
                <BookDetailsAndActionsContainer>
                  <BookDetailsContainer>
                    <BookTitle>
                      <b>Title : </b>
                      {book.bookName}
                    </BookTitle>
                    <BookAuthor>
                      <b>Author : </b>
                      {book.author}
                    </BookAuthor>
                    <BookPrice>
                      <b>Price : </b>
                      {book.price}
                    </BookPrice>
                  </BookDetailsContainer>
                  <ActionOnBookContainer>
                    <BuyNowButton
                      onClick={() => {
                        navigate("/order/details", { state: { book: book } });
                      }}
                    >
                      Buy Now
                    </BuyNowButton>
                    <AddToCardButton
                      disabled={areBooksNotAvailable(book.numberOfAvailableBooks)}
                    >
                      Add to Cart
                    </AddToCardButton>
                  </ActionOnBookContainer>
                  {areBooksNotAvailable(book.numberOfAvailableBooks) && (
                    <OutOfStockWarningText>Out of stock!</OutOfStockWarningText>
                  )}
                </BookDetailsAndActionsContainer>
              </BookDetailsAndActionsContainer>
            </Book>
          ))
        ) : (
          <h1>No books to show</h1>
        )}
      </BooksContainer>
    </HomePageContainer>
  );
}

export default Books;

export const areBooksNotAvailable = (numberOfAvailableBooks) => {
  return numberOfAvailableBooks <= 0;
};
