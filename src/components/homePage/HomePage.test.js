import { RouterProvider, createMemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";

const renderHomePage = () => {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
  ];
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(<RouterProvider router={router} />);
};

describe("HomePage", () => {
  it("should render action buttons on home page", () => {
    renderHomePage();

    expect(screen.getByText(/Buy Books/)).toBeEnabled();
  });
});
