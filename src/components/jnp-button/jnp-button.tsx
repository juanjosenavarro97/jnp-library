import styles from "./jnp-button.module.css";
import clsx from "clsx";

export type Variant = "primary" | "secondary" | "info" | "warning" | "danger";

interface JnpButtonProps {
  children: string;
  variant?: Variant;
  rounded?: boolean;
  full?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function JnpButton({
  children,
  variant = "primary",
  rounded = false,
  full = false,
  disabled = false,
  onClick,
}: JnpButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], {
        [styles.rounded]: rounded,
        [styles.full]: full,
      })}
      disabled={disabled}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
}

export default JnpButton;
