import styles from "./jnp-input.module.css";
interface JnpInputProps {}

export function JnpInput({}: JnpInputProps) {
  return <input type="text" className={styles.input}></input>;
}

export default JnpInput;
