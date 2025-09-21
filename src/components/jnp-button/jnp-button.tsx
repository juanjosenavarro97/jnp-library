import clsx from "clsx";
import styles from "./jnp-button.module.css";

type Variant = "primary" | "secondary";

interface JnpButtonProps {
  text: string;
  variant?: Variant;
}

export function JnpButton({ text, variant = "primary" }: JnpButtonProps) {
  return (
    <button
      className={clsx({
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {text}
    </button>
  );
}

export default JnpButton;
