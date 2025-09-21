interface JnpButtonProps {
  text: string;
}

export function JnpButton({ text }: JnpButtonProps) {
  return <button>{text}</button>;
}

export default JnpButton;
