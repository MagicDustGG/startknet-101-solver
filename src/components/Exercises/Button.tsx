import { FC, MouseEventHandler } from "react";

type Props = {
  extraClass?: string;
  onClick: MouseEventHandler;
};

const Button: FC<Props> = ({ onClick, extraClass, children }) => (
  <button
    className={`border bg-slate-700 text-white px-4 py-2 my-4 text-md cursor-pointer ${extraClass}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
