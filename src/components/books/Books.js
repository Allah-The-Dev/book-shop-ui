import { useSelector, useDispatch } from "react-redux";
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
} from "./Books.style";
import { useEffect } from "react";
import { loadBooks } from "../service/bookService";
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
                    <BookTitle><b>Title : </b>{book.bookName}</BookTitle>
                    <BookAuthor><b>Author : </b>{book.author}</BookAuthor>
                    <BookPrice><b>Price : </b>{book.price}</BookPrice>
                  </BookDetailsContainer>
                  <ActionOnBookContainer>
                    <BuyNowButton disabled={book.numberOfAvailableBooks <= 0}>
                      Buy Now
                    </BuyNowButton>
                    <AddToCardButton
                      disabled={book.numberOfAvailableBooks <= 0}
                    >
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
    </HomePageContainer>
  );
}

export default Books;
