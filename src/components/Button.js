import React from "react";
import styled from "styled-components";
const Button = styled.div`
  appearance: none;
  background: #026aa7;
  color: #fff;
  font-size: 17px;
  padding: 5px;
  border-radius: 4px;
  box-shadow: inset 0 -4px 0 0 rgba(#000, 0.2);
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 -4px 0 0 rgba(#000, 0.6), 0 0 8px 0 rgba(#000, 0.5);
  }
  &:focus {
    position: relative;
    top: 4px;
    box-shadow: inset 0 3px 5px 0 rgba(#000, 0.2);
    outline: 0;
  }
`;
const ButtonComponent = ({ children }) => (
  <div>
    <Button>{children}</Button>
  </div>
);

export default ButtonComponent;
