import React from "react";
import Layout from "../components/Layout";
import { ContactCopmonent as Contact } from "./contact";
import { SurgeriesComponent as Surgeries } from "./surgeries";
import CV from "../components/sections/CV";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import { graphql } from "gatsby";
import { Link } from "@reach/router";
import Button from "../components/Button";
const StyledSection = styled.div`
  grid-area: sections;
  background-color: var(--light);
`;
const IndexPage = ({ data }) => {
  const { edges: surgeries } = data.allMarkdownRemark;

  return (
    <Layout>
      <StyledSection>
        <CV />
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

export const SurgeriesQuery = graphql`
  query Surgeries {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "surgery-page" } } }
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
  }
`;

export default IndexPage;
