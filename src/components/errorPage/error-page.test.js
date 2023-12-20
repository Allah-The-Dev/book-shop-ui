import React from "react";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import ErrorPage from "./error-page";

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
  it("renders ErrorPage component", async () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    // Testing navigating using the button
    expect(screen.getByText("Oops!")).toBeInTheDocument();
  });
});
