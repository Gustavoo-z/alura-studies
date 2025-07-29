import style from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}

export default function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
}
