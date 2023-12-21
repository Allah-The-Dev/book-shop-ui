import { fireEvent, screen, waitFor } from "@testing-library/react";
import bookService from "../../service/bookService";
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

jest.mock("../../service/bookService", () => ({
  loadBooks: jest.fn(() => Promise.resolve(booksMock)),
}));

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...jest.requireActual("react-router-dom"),

  // 4- Mock the required hook
  useNavigate: () => mockedUsedNavigate,
}));

describe("SearchBooks", () => {
  it("should show input box and button where user can search for a specific word", async () => {
    const loadBooksMock = jest.spyOn(bookService, "loadBooks");
    renderWithProviders(<SearchBooks />);

    // search input element
    const searchBookInputElement = screen.getByPlaceholderText("java");
    // add mock value in input box
    fireEvent.change(searchBookInputElement, { target: { value: "python" } });
    // value is present in input box
    expect(searchBookInputElement).toHaveValue("python");

    // search "search" button
    fireEvent.click(screen.getByText(/Search/));

    await waitFor(() => expect(loadBooksMock).toHaveBeenCalledTimes(1));

    // await waitFor(() => expect(mockedUsedNavigate).toHaveBeenCalledTimes(1));
  });
});
