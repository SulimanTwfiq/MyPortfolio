import React from "react";
import { DefaultCard } from "../components/Card";

export const CV = ({ CVinfo }) =>
  CVinfo ? (
    <DefaultCard center>
      <div>
        <h2>{CVinfo.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: CVinfo.html }} />
      </div>
    </DefaultCard>
  ) : (
    <p>صفحة غير موجودة</p>
  );

export default CV;
