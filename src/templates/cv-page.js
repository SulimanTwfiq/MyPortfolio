import React from "react";
import { DefaultCard } from "../components/Card";

export const CV = ({ CVinfo }) => (
  <DefaultCard center>
    <div>
      <h4>{CVinfo.frontmatter.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: CVinfo.html }} />
    </div>
  </DefaultCard>
);

export default CV;
