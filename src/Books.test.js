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

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(booksMock),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render Books page with mock book and both books are present in document", async () => {
    const routes = [
      {
        path: "/",
        element: <Books />,
        loader: () => booksMock,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });

    render(<RouterProvider router={router} />);

    // Testing navigating using the button
    const javaBookElement = await screen.findByText(/Java book/);
    expect(javaBookElement).toBeInTheDocument();

    expect(screen.getByText(/React book/)).toBeInTheDocument();
  });

  it("should return books on call GET /books API", async () => {
    const gotBooks = await loadBooks();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(gotBooks).toEqual(booksMock);
  });
});
