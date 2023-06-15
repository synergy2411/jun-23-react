import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("render the list item for various posts", async () => {
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");

    screen.debug;
    expect(listItems).not.toHaveLength(0);
  });
});
