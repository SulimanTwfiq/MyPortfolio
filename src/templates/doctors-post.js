import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { ContactCard } from "../components/Card";

export const DoctorPage = ({ title, description }) => {
  return (
    <ContactCard>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </ContactCard>
  );
};

const DoctorsPageTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DoctorPage
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default DoctorsPageTemplate;

export const aboutPageQuery = graphql`
  query DoctorsPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
