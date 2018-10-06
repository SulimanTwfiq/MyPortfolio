import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
const StyledBlog = styled.section`
  text-align: center;
  p:last-of-type {
    background-color: red;
    padding: 10px;
  }
`;
const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: posts } = data.allMarkdownRemark;
        return (
          <Layout>
            <StyledBlog>
              {posts.map(({ node: post }) => (
                <div key={post.id}>
                  <p>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link to={post.fields.slug}>Keep Reading →</Link>
                  </p>
                </div>
              ))}
            </StyledBlog>
          </Layout>
        );
      }}
    />
  );
};

export default Blog;
