import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { DefaultCard } from "../components/Card";

export const BlogPostTemplate = ({ content, title, helmet }) => {
  return (
    <DefaultCard>
      {helmet || ""}

      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </DefaultCard>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        helmet={<Helmet title={`${post.frontmatter.title} `} />}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
