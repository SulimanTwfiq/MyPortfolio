import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { DefaultCard } from "../components/Card";
import Metatags from "../components/Metatags";
export const TVPostTemplate = ({ content, title }) => {
  return (
    <DefaultCard>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </DefaultCard>
  );
};

const TVPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Metatags title={post.frontmatter.title} description={post.html} />
      <TVPostTemplate content={post.html} title={post.frontmatter.title} />
    </Layout>
  );
};

export default TVPost;

export const pageQuery = graphql`
  query TVPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
