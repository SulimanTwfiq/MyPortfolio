import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { DefaultCard } from "../components/Card";

export const SurgeryPage = ({ title, content }) => {
  return (
    <DefaultCard>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </DefaultCard>
  );
};

const SurgeryPageTemplate = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post.html);
  return (
    <Layout>
      <SurgeryPage content={post.html} description={post.frontmatter.description} title={post.frontmatter.title} />
    </Layout>
  );
};

export default SurgeryPageTemplate;

export const aboutPageQuery = graphql`
  query SurgeryPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
