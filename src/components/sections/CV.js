import React from "react";
import { DefaultCard } from "../Card";

export const CV = ({ CVinfo }) =>
  CVinfo ? (
    <DefaultCard center>
      <h2>السيرة الذاتية</h2>
      <p>{CVinfo}</p>
    </DefaultCard>
  ) : (
    <p>صفحة غير موجودة</p>
  );

export default CV;
