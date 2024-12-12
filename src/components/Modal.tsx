import { cn } from "../lib/utils";
import React from "react";

type ModalProps = {
  isOpen?: boolean;
  onClose?: any;
  className?: string;
  children: React.ReactNode;
};

const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        className
      )}
      onClick={onClose}
    >
      <div onClick={(event) => event.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
