import styled from "styled-components";

const FormStyled = styled.form`
  width: 80%;

  border: 2px dotted yellow;

  display: flex;
  flex-direction: column;
  align-items: center;

  .label,
  .input,
  .button {
    font-size: 30px;
    text-align: center;
  }

  .label {
    margin: 1em;
    padding: 0.5em;
    color: white;
    border: 1px dotted rosybrown;
  }

  .input,
  .button {
    margin: 1em;
    padding: 0.5em;
    border: 2px dotted white;
    border-radius: 1em;
    background-image: url("https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg");
    color: white;
  }
  .button {
    background-image: url("https://media.tenor.com/x-HMKdm4KAoAAAAd/foguete-ponto-focal-foguete.gif");
  }
`;

export default FormStyled;
