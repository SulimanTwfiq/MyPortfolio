import React from "react";
import Button from "@atlaskit/button";

const ButtonComponent = ({ children, onClick }) => (
  <Button
    onClick={onClick}
    appearance={"primary"}
    css={`
      margin-top: 15px;
      font-size: 0.7rem;
      a {
        color: white;
      }
    `}
  >
    {children}
  </Button>
);
export default ButtonComponent;
