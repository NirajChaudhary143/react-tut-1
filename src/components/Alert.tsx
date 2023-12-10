import React from "react";
interface Props {
  children: string;
  onClose: () => void;
}
export default function Alert({ children, onClose }: Props) {
  return (
    <>
      <div className="alert alert-success" role="alert">
        {children}
        <button onClick={onClose} type="button" className="btn-close"></button>
      </div>
    </>
  );
}
