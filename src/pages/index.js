import React from "react";
import Layout from "../components/Layout";
import { SurgeriesComponent as Surgeries } from "./surgeries";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import Metatags from "../components/Metatags";
import { graphql } from "gatsby";
import { Link } from "@reach/router";
import Button from "../components/Button";
import CV from "../templates/cv-page";
const StyledSection = styled.div`
  grid-area: sections;
`;
const IndexPage = ({ data }) => {
  const { edges: surgeries } = data.surgeries;
  const { cvPage } = data;

  return (
    <Layout>
      <Metatags
        title={"الدكتور نزار فقية"}
        description={
          "استشاري جراحه تجميل الأنف و الوجه حاصل على الدكتوراه من جامعه باريس في أمراض الأنف و الأذن و الحنجرة حاصل على الدكتوراه من اعرق جامعات العالم في تجميل الأنف و الوجه و الرقبة من جامعه باريس دوز في جراحه تجميل الأنف و الوجه و الرقبة . خبره طويلة في جراحات تجميل الأنف بمختلف تشوهاته بالإضافة إلى أمراض الأنف و الجيوب الأنفية                "
        }
        url={data.site.siteMetadata.siteUrl}
      />
      <StyledSection>
        <CV CVinfo={cvPage} />
        <Surgeries surgeries={surgeries} />
        <DefaultCard>
          <h2>معرض الصور</h2>
          <h5>شاهد صور المرضى قبل وبعد العمليات التي قام بها الدكتور نزار فقيه</h5>
          <Link to="/pictures">
            <Button>مشاهدة</Button>
          </Link>
        </DefaultCard>
        <DefaultCard>
          <h2>حجز موعد</h2>
          <h5>احجز موعدك مع الدكتور في أقل من دقيقتين</h5>
          <Link to="/Contact">
            <Button>احجز</Button>
          </Link>
        </DefaultCard>
      </StyledSection>
    </Layout>
  );
};

export const IndexQuery = graphql`
  query IndexQuery {
    surgeries: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "surgery-post" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
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
