import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { DefaultCard } from "../../components/Card";
import Button from "../../components/Button";

const StyledPost = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin: 7px 0;
  border: 2px rgba(0, 0, 0, 0.2) dotted;
  a:first-child {
    font-size: 1.2rem;
  }
  small {
    font-size: 0.6rem;
  }
  img{
    width:200px;
    display:block;
    margin:0 auto;
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
                  thumbnail
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
            <DefaultCard center>
              {posts.map(({ node: post }) => (
                <StyledPost key={post.id}>
                {console.log(post.frontmatter.thumbnail)}
                  <p>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <img src={post.frontmatter.thumbnail} alt="صورة"/>
                  <p>
                    {post.excerpt}
                  </p>
                    <Button>
                      <Link to={post.fields.slug}>تابع القراءة </Link>
                    </Button>
                </StyledPost>
              ))}
            </DefaultCard>
          </Layout>
        );
      }}
    />
  );
};

export default Blog;
