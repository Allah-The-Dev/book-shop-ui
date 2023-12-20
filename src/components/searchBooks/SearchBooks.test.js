import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";

import SearchBooks from "./SearchBooks";

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
    screen.getByText(/Search/);
  });
});
