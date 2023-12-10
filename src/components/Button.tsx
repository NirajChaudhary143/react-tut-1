import React, { ReactNode } from "react";
interface Props {
  children: string;
  onClick: () => void;
}
export default function Button({ children, onClick }: Props) {
  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
