import { useLoaderData } from "react-router-dom";
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
} from "./Books.style";

function Books() {
  const books = useLoaderData();

  return (
    <BooksContainer>
      {books.books.map((book) => (
        <Book key={book.isbn}>
          <BookImageContainer>
            <BookImage alt={book.bookName} />
          </BookImageContainer>
          <BookDetailsAndActionsContainer>
            <BookDetailsAndActionsContainer>
              <BookDetailsContainer>
                <BookTitle>Title : {book.bookName}</BookTitle>
                <BookAuthor>Author : {book.author}</BookAuthor>
              </BookDetailsContainer>
            </BookDetailsAndActionsContainer>
            <ActionOnBookContainer>
              <BuyNowButton>Buy Now</BuyNowButton>
              <AddToCardButton>Add to Cart</AddToCardButton>
            </ActionOnBookContainer>
          </BookDetailsAndActionsContainer>
        </Book>
      ))}
    </BooksContainer>
  );
}

export default Books;

export const loadBooks = async () => {
  const response = await fetch("http://localhost:9090/books");
  return response.json();
};
