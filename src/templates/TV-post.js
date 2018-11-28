import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { DefaultCard } from "../components/Card";

export const TVPostTemplate = ({ content, title, helmet }) => {
  return (
    <DefaultCard>
      {helmet || ""}

      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </DefaultCard>
  );
};

const TVPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TVPostTemplate
        content={post.html}
        helmet={<Helmet title={`${post.frontmatter.title} `} />}
        title={post.frontmatter.title}
      />
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
        description
      }
    }
  }
`;
