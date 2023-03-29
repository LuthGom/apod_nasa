import React, { ReactElement } from "react";
import CardStyled from "./CardStyled";

type Props = {
  title: string;
  midia: string;
  descricao: string;
  copy: string;
  sin: boolean
};

export default function Card({ title, midia, descricao, copy, sin }: Props) {
  return (
    <CardStyled>
      <span>
        <h2 className="title">{title}</h2>
      </span>
      {(sin === true && <img className="img" src={midia} alt="" />) || (
        <iframe src={midia}></iframe>
      )}{" "}
      <p className="descricao">{descricao}</p>
      <p className="copy">Credits: {copy}</p>
    </CardStyled>
  );
}
