import React from "react";
import { DefaultCard } from "../components/Card";

export const CV = ({ CVinfo }) =>
  CVinfo ? (
    <DefaultCard center>
      <div>
        <h4>{CVinfo.frontmatter.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: CVinfo.html }} />
      </div>
    </DefaultCard>
  ) : (
    <p>صفحة غير موجودة</p>
  );

export default CV;
