import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { DefaultCard } from "../components/Card";

export const BlogPostTemplate = ({ content, title, helmet, thumbnail }) => {
  return (
    <DefaultCard>
      {helmet || ""}

      <h2>{title}</h2>
      <img src={thumbnail} alt={title} />
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
        thumbnail={post.frontmatter.thumbnail}
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
        thumbnail
      }
    }
  }
`;
