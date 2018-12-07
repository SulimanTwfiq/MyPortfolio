import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { DefaultCard } from "../components/Card";
import Metatags from "../components/Metatags";
export const BlogPostTemplate = ({ content, title, thumbnail }) => {
  return (
    <DefaultCard>
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
      <Metatags title={post.frontmatter.title} description={post.html} />
      <BlogPostTemplate content={post.html} title={post.frontmatter.title} thumbnail={post.frontmatter.thumbnail} />
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
        thumbnail
      }
    }
  }
`;
