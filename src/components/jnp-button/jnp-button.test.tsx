import { render, screen } from "@testing-library/react";
import JnpButton, { type Variant } from "./jnp-button";
import userEvent from "@testing-library/user-event";
import styles from "./jnp-button.module.css";

const VARIANTS: Variant[] = [
  "primary",
  "secondary",
  "info",
  "warning",
  "danger",
];

describe("JnpButton", () => {
  describe("styles", () => {
    it("should render", () => {
      render(<JnpButton>Texto</JnpButton>);
      expect(screen.getByText("Texto")).toHaveClass(styles.primary);
    });

    it("should render rounded", () => {
      render(<JnpButton rounded>Texto</JnpButton>);
      expect(screen.getByText("Texto")).toHaveClass(styles.rounded);
    });

    it("should render full", () => {
      render(<JnpButton full>Texto</JnpButton>);
      expect(screen.getByText("Texto")).toHaveClass(styles.full);
    });

    it.each(VARIANTS)("should render %s", (variant) => {
      render(<JnpButton variant={variant}>Texto</JnpButton>);
      expect(screen.getByText("Texto")).toHaveClass(styles[variant]);
    });
  });

  describe("interactions", () => {
    const user = userEvent.setup();

    it("onClick", async () => {
      const onClickMock = vi.fn();
      render(<JnpButton onClick={onClickMock}>Texto</JnpButton>);

      await user.click(screen.getByText("Texto"));
      expect(onClickMock).toHaveBeenCalled();
    });

    it("disabled", async () => {
      const onClickMock = vi.fn();
      render(
        <JnpButton disabled onClick={onClickMock}>
          Texto
        </JnpButton>,
      );

      const button = screen.getByText("Texto");
      expect(button).toBeDisabled();

      await user.click(button);
      expect(onClickMock).not.toHaveBeenCalled();
    });
  });
});
