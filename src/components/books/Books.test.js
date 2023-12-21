import React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import * as bookService from "../../service/bookService";
import { renderWithProviders } from "../../test-utils";
import Books from "./Books";

// 1- Mocking the hook using jest.fn
const mockedUsedRouteError = jest.fn();
// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...jest.requireActual("react-router-dom"),

  // 4- Mock the required hook
  useRouteError: () => mockedUsedRouteError,
  useNavigate: () => mockedUsedNavigate,
}));

const renderBooksComponentWithReduxAndRouter = () => {
  const routes = [
    {
      path: "/books",
      element: <Books />,
    },
  ];

  const router = createMemoryRouter(routes, { initialEntries: ["/books"] });

  renderWithProviders(<RouterProvider router={router} />);
};

describe("Books", () => {
  const booksMock = {
    books: [
      {
        isbn: "012346",
        bookName: "React book",
        description: "React Book description",
        author: "Bala",
        publicationYear: 2022,
        smallImageUrl: "imageurlsmall/img.img",
        largeImageUrl: "largeImageurllarge.img",
        price: 128.55,
        numberOfAvailableBooks: 5,
        rating: 4.8,
      },
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

  const singleBookMockWithNoAvailability = {
    books: [
      {
        isbn: "012346",
        bookName: "React book",
        description: "React Book description",
        author: "Bala",
        publicationYear: 2022,
        smallImageUrl: "imageurlsmall/img.img",
        largeImageUrl: "largeImageurllarge.img",
        price: 128.55,
        numberOfAvailableBooks: 0,
        rating: 4.8,
      },
    ],
  };

  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("should render Books when backend return books successfully", async () => {
    jest.spyOn(bookService, "loadBooks").mockResolvedValueOnce(booksMock);

    renderBooksComponentWithReduxAndRouter();

    const javaBookElement = await screen.findByText(/Java book/);
    expect(javaBookElement).toBeInTheDocument();

    expect(screen.getByText(/React book/)).toBeInTheDocument();
    expect(screen.getByText(/Amar/)).toBeInTheDocument();
    expect(screen.getByText(/128.55/)).toBeInTheDocument();
  });

  it('should render "No books to show" message if no books are available', async () => {
    jest.spyOn(bookService, "loadBooks").mockResolvedValueOnce({ books: [] });

    renderBooksComponentWithReduxAndRouter();

    const javaBookElement = await screen.findByText(/No books to show/);
    expect(javaBookElement).toBeInTheDocument();
  });

  it("should disable buy now and add to cart button if numberOfAvailableBooks <= 0", async () => {
    jest
      .spyOn(bookService, "loadBooks")
      .mockResolvedValueOnce(singleBookMockWithNoAvailability);

    renderBooksComponentWithReduxAndRouter();

    const javaBookElement = await screen.findByText(/React book/);
    expect(javaBookElement).toBeInTheDocument();

    expect(screen.getByText(/Buy Now/)).toHaveAttribute("disabled");
    expect(screen.getByText(/Add to Cart/)).toHaveAttribute("disabled");
  });

  it("should not show books when load books return error", async () => {
    jest
      .spyOn(bookService, "loadBooks")
      .mockRejectedValueOnce(new Error("something went wrong"));

    renderBooksComponentWithReduxAndRouter();
  });

  it.only("should navigate to order details page on click of buy now button", async () => {
    const singleBookMock = {
      ...singleBookMockWithNoAvailability,
      numberOfAvailableBooks: 2,
    };
    jest.spyOn(bookService, "loadBooks").mockResolvedValueOnce(singleBookMock);

    renderBooksComponentWithReduxAndRouter();

    const javaBookElement = await screen.findByText(/React book/);
    expect(javaBookElement).toBeInTheDocument();

    const buyNowButton = screen.getByText(/Buy Now/);

    await waitFor(() => expect(buyNowButton).toBeEnabled());
    fireEvent.click(buyNowButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/order/details", {
      state: { book: singleBookMock.books[0] },
    });
  });
});
