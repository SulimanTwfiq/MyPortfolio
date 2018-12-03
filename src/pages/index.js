import React from "react";
import Layout from "../components/Layout";
import { ContactCopmonent as Contact } from "../templates/contact-page";
import { SurgeriesComponent as Surgeries } from "./surgeries";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import { graphql } from "gatsby";
import { Link } from "@reach/router";
import Button from "../components/Button";
import CV from "../templates/cv-page";
const StyledSection = styled.div`
  grid-area: sections;
  background-color: var(--light);
`;
const IndexPage = ({ data }) => {
  const { edges: surgeries } = data.surgeries;
  const { cvPage } = data;
  return (
    <Layout>
      <StyledSection>
        <CV CVinfo={cvPage} />
        <Surgeries surgeries={surgeries} />
        <DefaultCard>
          <h2>معرض الصور</h2>
          <h5>
            شاهد صور المرضى قبل وبعد العمليات التي قام بها الدكتور نزار فقيه
          </h5>
          <Link to="/pictures">
            <Button>مشاهدة</Button>
          </Link>
        </DefaultCard>
        <Contact />
      </StyledSection>
    </Layout>
  );
};

export const IndexQuery = graphql`
  query IndexQuery {
    surgeries: allMarkdownRemark(
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
            description
            img
          }
        }
      }
    }

    cvPage: markdownRemark(frontmatter: { path: { eq: "/cv" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default IndexPage;
