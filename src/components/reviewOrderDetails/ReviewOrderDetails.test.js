import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../test-utils";
import ReviewOrderDetails from "./ReviewOrderDetails";
import { screen } from "@testing-library/react";

const renderReviewOrderDetailsWithReduxAndRouter = () => {
  const routes = [
    {
      path: "/order/review",
      element: <ReviewOrderDetails />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/order/review"],
  });

  renderWithProviders(<RouterProvider router={router} />);
};

describe("ReviewOrderDetails", () => {
  it("should show item details, address details and submit order button", () => {
    renderReviewOrderDetailsWithReduxAndRouter();

    expect(screen.getByText(/Item Details/)).toBeVisible();
    expect(screen.getByText(/Address and Payment Mode/)).toBeVisible();
    expect(screen.getByText(/Submit Order/)).toBeEnabled();
  });
});
