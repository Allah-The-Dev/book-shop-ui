import { RouterProvider, createMemoryRouter } from "react-router-dom";
import * as orderService from "../../service/orderService";
import { renderWithProviders } from "../../test-utils";
import ReviewOrderDetails from "./ReviewOrderDetails";
import { fireEvent, screen } from "@testing-library/react";

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

  it("should show success message on successfully submitting order to order service", async () => {
    jest.spyOn(orderService, "submitOrder").mockResolvedValueOnce({});

    renderReviewOrderDetailsWithReduxAndRouter();

    fireEvent.click(screen.getByText(/Submit Order/));

    const successMessage = await screen.findByText(
      /Your order have been placed successfully/
    );
    expect(successMessage).toBeVisible();
  });

  it("should show failure message on failure of submitting order to order service", async () => {
    jest.spyOn(orderService, "submitOrder").mockRejectedValueOnce({});

    renderReviewOrderDetailsWithReduxAndRouter();

    fireEvent.click(screen.getByText(/Submit Order/));

    const failureMessage = await screen.findByText(
      /Sorry! We were not able to place your order, please try again./
    );
    expect(failureMessage).toBeVisible();
  });
});
