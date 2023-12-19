import React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import Books, { loadBooks } from "./Books";

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...jest.requireActual("react-router-dom"),

  // 4- Mock the required hook
  useRouteError: () => mockedUsedNavigate,
}));

describe("ErrorPage", () => {
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

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(booksMock),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render Books page with mock books and both books are present in document", async () => {
    const routes = [
      {
        path: "/",
        element: <Books />,
        loader: () => booksMock,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });

    render(<RouterProvider router={router} />);

    const javaBookElement = await screen.findByText(/Java book/);
    expect(javaBookElement).toBeInTheDocument();

    expect(screen.getByText(/React book/)).toBeInTheDocument();
  });

  it('should render "No books to show message if no books are available"', async () => {
    const routes = [
      {
        path: "/",
        element: <Books />,
        loader: () => ({
          books: [],
        }),
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });

    render(<RouterProvider router={router} />);

    const javaBookElement = await screen.findByText(/No books to show/);
    expect(javaBookElement).toBeInTheDocument();
  });

  it("should disable buy now and add to cart button if numberOfAvailableBooks <= 0", async () => {
    
    const routes = [
      {
        path: "/",
        element: <Books />,
        loader: () => singleBookMockWithNoAvailability,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });

    render(<RouterProvider router={router} />);

    const javaBookElement = await screen.findByText(/React book/);
    expect(javaBookElement).toBeInTheDocument();

    expect(screen.getByText(/Buy Now/)).toHaveAttribute('disabled');
    expect(screen.getByText(/Add to Cart/)).toHaveAttribute('disabled');
  });

  it("should return books on call GET /books API", async () => {
    const gotBooks = await loadBooks();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(gotBooks).toEqual(booksMock);
  });
});
