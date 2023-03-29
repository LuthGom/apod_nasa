import React from "react";
import { HeaderStyled } from "./HeaderStyled";
type Props = {};

export default function Header({}: Props) {
  return (
    <HeaderStyled>
      <img className="nasa_logo" src={import.meta.env.VITE_IMG_NASA} alt="" />

      <h1 className="header_title">A CADA DIA UM ENCANTO ESPACIAL DIFERENTE 🚀</h1>
    </HeaderStyled>
  );
}
