import React from "react";
import { DefaultCard } from "../components/Card";

export const CV = ({ CVinfo }) =>
  CVinfo ? (
    <DefaultCard center>
      <h2>السيرة الذاتية</h2>
      <p dangerouslySetInnerHTML={{ __html: CVinfo.html }} />
    </DefaultCard>
  ) : (
    <p>صفحة غير موجودة</p>
  );

export default CV;
