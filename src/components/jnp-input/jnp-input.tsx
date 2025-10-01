import { useId, useMemo } from "react";
import styles from "./jnp-input.module.css";

interface JnpInputProps {
  label: string;
  type?: "text" | "password" | "email" | "number";
  id?: string;
}

export function JnpInput({ label, type = "text", id }: JnpInputProps) {
  const reactId = useId();
  const inputId = useMemo(() => id ?? `jnp-${reactId}`, [id, reactId]);

  return (
    <div className={styles.container}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input id={inputId} type={type} className={styles.input}></input>
    </div>
  );
}

export default JnpInput;
