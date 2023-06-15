import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HelloWorld from "./HelloWorld";

describe("HelloWorld Component", () => {
  test("renders 'Hello world' as text", () => {
    render(<HelloWorld />);

    const element = screen.getByText("Hello World", { exact: false });

    expect(element).toBeInTheDocument();
  });

  test("render 'good to see you' before the button click", () => {
    render(<HelloWorld />);

    const element = screen.queryByText("good to see you", { exact: false });

    expect(element).toBeInTheDocument();
  });

  test("render 'Changed Content' when the button is clicked", () => {
    //   Arrange
    render(<HelloWorld />);

    // Act
    const btnElement = screen.getByRole("button");

    act(() => {
      userEvent.click(btnElement);
    });

    // Assert
    const paragraphElement = screen.queryByText("Changed content", {
      exact: false,
    });

    // expect(paragraphElement).not.toBeNull();
    expect(paragraphElement).toBeInTheDocument();
  });

  test("not render 'good to see you' when button is clicked ", () => {
    // Arrange
    render(<HelloWorld />);

    // Act

    const btnElement = screen.getByRole("button");

    act(() => {
      userEvent.click(btnElement);
    });

    // Assert

    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });

    expect(paragraphElement).toBeNull();
  });
});
