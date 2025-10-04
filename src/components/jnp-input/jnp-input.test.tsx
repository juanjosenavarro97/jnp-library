import { render, screen } from "@testing-library/react";
import JnpInput, { type Variant } from "./jnp-input";
import { axe } from "jest-axe";
import styles from "./jnp-input.module.css";

const VARIANTS: Variant[] = ["primary", "secondary", "warning", "danger"];

describe("JnpInput", () => {
  it("should render", async () => {
    const { container } = render(<JnpInput label="Label" />);
    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it.each(VARIANTS)("should render with variant %s", async (variant) => {
    render(<JnpInput label="Label" variant={variant ?? "primary"} />);
    expect(screen.getByLabelText("Label").parentElement).toHaveClass(
      styles[variant],
    );
  });
});
