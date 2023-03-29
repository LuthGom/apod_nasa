import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 30%;
  margin: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1em;

  .nasa_logo {
    width: 30%;
    height: 30%;
  }
  .header_title {
    width: 50%;

    font-family: "Starburst Medium";
    color: yellow;
    text-align: center;
    line-height: 120%;
    letter-spacing: 0.1em;

    border: 3px solid white;
    border-radius: 1em;

    padding: 1em;
  }
`;
