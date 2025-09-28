import { render, screen } from "@testing-library/react";
import JnpButton from "./jnp-button";

describe("JnpButton", () => {
  it("should render", () => {
    render(<JnpButton text="Texto" />);
    expect(screen.getByText("Texto")).toBeInTheDocument();
  });
});
