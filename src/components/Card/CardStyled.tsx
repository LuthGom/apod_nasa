import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  .title {
    text-align: center;
    margin: 1em;
    padding: 0.5em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 2em;
    color: saddlebrown;
    text-shadow: 1px 1px white;
    border: 2px solid black;
    background: linear-gradient(45deg, white, black);
  }
  .img {
    height: auto;
    width: 50%;
    box-shadow: -5px -5px 5px white, 5px 5px 5px white;
  }
  .descricao {
    margin: 0 2.5em 0 2.5em;
    padding: 1em;
    width: 50%;
    height: fit-content;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    color: yellow;
    text-shadow: 2px 2px black;
    border: 2px groove white;
    box-shadow: -5px -5px 2.5px black, 10px 5px 2.5px black;
    letter-spacing: 1px;
    word-spacing: 1px;
    line-height: 1.5em;
    background: no-repeat;
    background-color: rgb(32, 29, 29);
    background-size: 100% 100%;
    opacity: 0.7;
  }
  .copy{
    font-family: 'Courier New', Courier, monospace;
    color: yellow;
    text-align: right;
  }
`;

export default CardStyled;
