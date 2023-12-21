import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import OrderDetails from "./OrderDetails";

describe("OrderDetails", () => {
  it("should show country in not editable input field", () => {
    renderWithProviders(<OrderDetails />);

    expect(screen.getByLabelText(/Country/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/)).toHaveAttribute("disabled");
  });

  it("should show address, pincode, alternate mobile no and payment mode input fields in form", () => {
    renderWithProviders(<OrderDetails />);

    expect(screen.getByLabelText(/Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/PinCode/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Alternate Mobile No/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cash On Delivery/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Pay By Card/)).toBeInTheDocument();
  });
});
