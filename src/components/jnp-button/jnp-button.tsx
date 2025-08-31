import type { ButtonHTMLAttributes } from "react";

type JnpButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function JnpButton(props: JnpButtonProps) {
  return <button {...props}></button>;
}

export default JnpButton;
