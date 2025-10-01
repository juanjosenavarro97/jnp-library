import { render, screen } from "@testing-library/react";
import JnpInput from "./jnp-input";
import { axe } from "jest-axe";

describe("JnpInput", () => {
  it("should render", async () => {
    const { container } = render(<JnpInput label="Label" />);
    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
