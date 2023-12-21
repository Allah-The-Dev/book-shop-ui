import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import SearchBooks from "./SearchBooks";

const booksMock = {
  books: [
    {
      isbn: "012345",
      bookName: "Java book",
      description: "Book description",
      author: "Amar",
      publicationYear: 2023,
      smallImageUrl: "imageurl/img.img",
      largeImageUrl: "largeImageurl.img",
      price: 100.55,
      numberOfAvailableBooks: 1,
      rating: 4.5,
    },
  ],
};

jest.mock("../service/bookService", () => ({
  loadBooks: jest.fn(() => Promise.resolve(booksMock)),
}));

describe("SearchBooks", () => {
  it("should show input box and button where user can search for a specific word", () => {
    renderWithProviders(<SearchBooks />);

    // search input element
    const searchBookInputElement = screen.getByPlaceholderText("java");
    // add mock value in input box
    fireEvent.change(searchBookInputElement, { target: { value: "java" } });
    // value is present in input box
    expect(searchBookInputElement).toHaveValue("java");

    // search "search" button
    fireEvent.click(screen.getByText(/Search/));
  });
});
