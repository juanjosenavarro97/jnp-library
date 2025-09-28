import { render, screen } from "@testing-library/react";
import JnpInput from "./jnp-input";

describe("JnpInput", () => {
  it("should render", () => {
    render(<JnpInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
