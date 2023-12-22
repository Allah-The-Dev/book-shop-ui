import { fireEvent, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../test-utils";
import OrderDetails from "./OrderDetails";

const renderOrderDetailsWithReduxAndRouter = () => {
  const routes = [
    {
      path: "/order/details",
      element: <OrderDetails />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/order/details"],
  });

  renderWithProviders(<RouterProvider router={router} />);
};

describe("OrderDetails", () => {
  it("should show country in not editable input field", () => {
    renderOrderDetailsWithReduxAndRouter();

    expect(screen.getByLabelText(/Country/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/)).toHaveAttribute("disabled");
  });

  it("should show address, pincode, alternate mobile no and payment mode input fields in form", () => {
    renderOrderDetailsWithReduxAndRouter();

    expect(screen.getByLabelText(/Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/PinCode/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Alternate Mobile No/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cash On Delivery/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Pay By Card/)).toBeInTheDocument();
  });

  it("should save details entered in form", () => {
    renderOrderDetailsWithReduxAndRouter();

    fireEvent.change(screen.getByLabelText(/PinCode/), {
      target: { value: 131234 },
    });
    fireEvent.change(screen.getByLabelText(/Address/), {
      target: { value: "Hebbal Bagalore" },
    });
    fireEvent.change(screen.getByLabelText(/Alternate Mobile No/), {
      target: { value: 42452353543543 },
    });

    const codRadioButton = screen.getByLabelText(/Cash On Delivery/);
    fireEvent.click(codRadioButton);

    const cardRadioButton = screen.getByLabelText(/Pay By Card/);
    fireEvent.click(cardRadioButton);
  });

  it("should navigate to review order screen on click of Review & Order", () => {
    renderOrderDetailsWithReduxAndRouter();
    fireEvent.click(screen.getByText(/Confirm & Review/));
  });
});
