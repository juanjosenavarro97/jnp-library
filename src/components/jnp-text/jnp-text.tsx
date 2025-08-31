import type { HTMLAttributes } from "react";
import styles from "./jnp-text.module.css";

type JnpTextProps = HTMLAttributes<HTMLSpanElement>;

export function JnpText(props: JnpTextProps) {
  return <p className={styles.text} {...props}></p>;
}

export default JnpText;
