import React, { ReactEventHandler, useEffect, useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import MainStyled from "./MainStyled";
import { urlApi } from "../../services/api";
type Props = {};

export default function Main({}: Props) {
  const [date, setDate] = useState("");
  const [res, setRes]: any = useState([]);
  const reqApod = async (day: string | ""): Promise<void> => {
    const response = await fetch(urlApi(import.meta.env.VITE_NASA_KEY, day));
    let data = await response.json();

    setRes(data);
  };

  useEffect(() => {
    reqApod(date);
  }, []);
  return (
    <MainStyled>
      <Form
        date={date}
        setDate={setDate}
        onClick={() => {
          reqApod(date);
        }}
      />

      <Card
        sin={res.media_type === "image" ? true : false}
        title={res.title}
        midia={res.url}
        descricao={res.explanation}
        copy={res.copyright}
      />
    </MainStyled>
  );
}
