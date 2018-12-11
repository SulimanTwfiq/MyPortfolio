import React from "react";
import { graphql } from "gatsby";
import Layout from "./Layout";
import { DefaultCard } from "../components/Card";
import Metatags from "../components/Metatags";
export const SurgeryPage = ({ title, content, img }) => {
  return (
    <DefaultCard as="article">
      {/* <span> 🡲</span> */}
      <h2> {title} </h2>
      <img src={img} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </DefaultCard>
  );
};

const SurgeryPageTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Metatags title={post.frontmatter.title} description={post.frontmatter.description} />

      <SurgeryPage content={post.html} title={post.frontmatter.title} img={post.frontmatter.img} />
    </Layout>
  );
};

export default SurgeryPageTemplate;

export const SurgeryPageQuery = graphql`
  query SurgeryPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        img
      }
    }
  }
`;
