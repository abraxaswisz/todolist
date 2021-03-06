import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  width: 310px;
  height: 420px;
  background: var(--main-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    margin: 0;
    margin-top: 0;
    font-weight: 900;
    font-size: 25px;
    color: var(--main-bg-color);
    & span {
      display: block;
      color: var(--accent-color);
    }
  }
  & h4 {
    color: var(--main-bg-color);
    margin: 8px 0 50px;
    font-size: 12px;
    font-weight: 700;
    & a {
      color: var(--accent-color);
      display: inline;
    }
  }
`;

export const Label = styled.label`
  color: var(--main-bg-color);
  margin: 0;
  font-weight: 700;
`;

export const StyledInput = styled.input`
  color: var(--main-bg-color);
  margin: 15px 0 25px 0;
  outline: none;
  border: none;
  padding-bottom: 4px;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid var(--main-bg-color);
  border-radius: 1px;
  width: 60%;
`;

export const StyledTextarea = styled.textarea`
  color: var(--main-bg-color);
  margin: 15px 0 25px 0;
  outline: none;
  border: none;
  padding-bottom: 4px;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid var(--main-bg-color);
  border-radius: 1px;
  width: 60%;
`;
