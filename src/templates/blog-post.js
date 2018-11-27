import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { DefaultCard } from "../components/Card";

export const BlogPostTemplate = ({ content, description, title, helmet }) => {
  return (
    <DefaultCard>
      {helmet || ""}

      <h2>{title}</h2>
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
        description={post.frontmatter.description}
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
