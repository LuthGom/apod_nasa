import { ReactEventHandler, useState } from "react";
import FormStyled from "./FormStyled";

type Props = {
  onClick: ReactEventHandler;
  date: string,
  setDate: React.Dispatch<React.SetStateAction<string>>
};

export default function Form({ onClick, date, setDate }: Props) {
  return (
    <FormStyled onSubmit={(e)=> e.preventDefault()}>
      <label className="label" htmlFor="data">
        Escolha uma data:{" "}
      </label>
      <input value={date} onChange={(e)=> setDate(e.target.value)} className="input" type="date" name="data" id="data" />
      <button onClick={onClick} className="button">
        Pesquisar Mídia
      </button>
    </FormStyled>
  );
}
