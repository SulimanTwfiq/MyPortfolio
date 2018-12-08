import React from "react";
import Layout from "../components/Layout";
import { SurgeriesComponent } from "./surgeries";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import Metatags from "../components/Metatags";
import { graphql } from "gatsby";
import { Link } from "@reach/router";
import Button from "../components/Button";
import media from "../components/media";
import CV from "../templates/cv-page";

const Container = styled.div`
  grid-area: sections;
  ${media.tablet`
  > div:nth-child(3) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  `}
`;
const SmallSection = ({ title, children, linkTo, buttonTitle }) => (
  <DefaultCard as="section" center>
    <h2>{title}</h2>
    <p>{children}</p>
    <Link to={`${linkTo}`}>
      <Button>{buttonTitle}</Button>
    </Link>
  </DefaultCard>
);

const IndexPage = ({ data }) => {
  const { edges: surgeries } = data.surgeries;
  const { cvPage } = data;
  console.log(cvPage.html);
  return (
    <Layout>
      <Metatags
        title={"الدكتور نزار فقية"}
        description={
          "استشاري جراحه تجميل الأنف و الوجه حاصل على الدكتوراه من جامعه باريس في أمراض الأنف و الأذن و الحنجرة حاصل على الدكتوراه من اعرق جامعات العالم في تجميل الأنف و الوجه و الرقبة من جامعه باريس دوز في جراحه تجميل الأنف و الوجه و الرقبة . خبره طويلة في جراحات تجميل الأنف بمختلف تشوهاته بالإضافة إلى أمراض الأنف و الجيوب الأنفية                "
        }
        url={data.site.siteMetadata.siteUrl}
      />
      <Container>
        <CV CVinfo={cvPage} />
        <SurgeriesComponent surgeries={surgeries} />
        <div>
          <SmallSection title="معرض الصور" linkTo="pictures" buttonTitle="مشاهدة">
            شاهد صور المرضى قبل وبعد العمليات <br /> التي قام بها الدكتور نزار فقي{" "}
          </SmallSection>
          <SmallSection title="حجز موعد" linkTo="Contact" buttonTitle="احجز">
            احجز موعدك مع الدكتور في أقل من دقيقتين
          </SmallSection>
        </div>
      </Container>
    </Layout>
  );
};

export const IndexQuery = graphql`
  query IndexQuery {
    surgeries: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "surgery-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            img
          }
        }
      }
    }

    cvPage: markdownRemark(frontmatter: { path: { eq: "/cv" } }) {
      html
    }

    site: site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default IndexPage;
