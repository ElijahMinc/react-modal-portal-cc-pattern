import { useContext } from "react";
import { ModalProvider } from "../Context/ModalContext";

export const useModalContext = () => useContext(ModalProvider)