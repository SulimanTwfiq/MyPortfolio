import React from "react";

import FieldBase, { Label } from "@atlaskit/field-base";
import Input from "@atlaskit/input";

const TextField = ({ Forlabel, ForHandleChange }) => (
  <>
    <label>{Forlabel}</label>
    <FieldBase isCompact>
      <Input isEditing onChange={ForHandleChange} />
    </FieldBase>
  </>
);
export default TextField;
