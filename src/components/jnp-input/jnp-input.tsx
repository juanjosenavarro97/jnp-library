import { useId, useMemo } from "react";
import styles from "./jnp-input.module.css";
import clsx from "clsx";

export type Variant = "primary" | "secondary" | "warning" | "danger";

interface JnpInputProps {
  label: string;
  type?: "text" | "password" | "email" | "number";
  id?: string;
  variant?: Variant;
}

export function JnpInput({
  label,
  type = "text",
  id,
  variant = "primary",
}: JnpInputProps) {
  const reactId = useId();
  const inputId = useMemo(() => id ?? `jnp-${reactId}`, [id, reactId]);

  return (
    <div className={clsx(styles.container, styles[variant])}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input id={inputId} type={type} className={styles.input}></input>
    </div>
  );
}

export default JnpInput;
