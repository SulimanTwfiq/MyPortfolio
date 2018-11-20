import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 5px;
  border: 4px black solid;
  line-height: 1.5;
  margin: 0 4px;
  p {
    font-size: 0.9rem;
  }
`;
const Sections = () => (
  <Container>
    <h2>السيرة الذاتية</h2>
    <p>
      استشاري جراحه تجميل الأنف و الوجه حاصل على الدكتوراه من جامعه باريس في أمراض الأنف و الأذن و الحنجرة حاصل على
      الدكتوراه من اعرق جامعات العالم في تجميل الأنف و الوجه و الرقبة من جامعه باريس دوز في جراحه تجميل الأنف و الوجه و
      الرقبة . خبره طويلة في جراحات تجميل الأنف بمختلف تشوهاته بالإضافة إلى أمراض الأنف و الجيوب الأنفية
    </p>
  </Container>
);

export default Sections;
