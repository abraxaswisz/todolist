import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  width: 300px;
  height: 350px;
  background: var(--main-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin-top: 0;
    font-weight: 700;
    color: var(--main-bg-color);
    & span {
      color: var(--accent-color);
    }
  }
`;

export const Label = styled.label`
  color: var(--main-bg-color);
  margin: 0;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  margin: 15px 0 25px 0;
  outline: none;
  border: none;
  padding-bottom: 4px;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 2px solid var(--main-bg-color);
  border-radius: 1px;
  width: 60%;
`;
