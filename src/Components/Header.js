import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledH1 = styled.h1`
  font-size: 45px;
  font-weight: 900;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  #list {
    color: var(--accent-color);
  }
`;

const StyledH3 = styled.h3`
  margin: 0;
  color: var(--accent-color);
  font-weight: 500;
  font-size: 26px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Letters = styled.span`
  color: inherit;
  display: block;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  ::before {
    margin-right: 20px;
    content: "";
    width: 153px;
    height: 1px;
    background: white;
    display: inline-block;
    position: relative;
    top: -8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>
        To Do <span id="list">List</span>
      </StyledH1>
      <StyledH3>
        <Letters>Get</Letters> <Letters>Your</Letters> <Letters>Shit</Letters>
        <Letters>Done</Letters>
      </StyledH3>
    </StyledHeader>
  );
};

export default Header;
