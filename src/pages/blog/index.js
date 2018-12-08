import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { DefaultCard } from "../../components/Card";
import media from "../../components/media";
const StyledPost = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin: 7px 0;
  border: 2px rgba(0, 0, 0, 0.2) dotted;
  p {
    font-size: 0.8rem;
  }
  img {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
  ${media.tablet`
  display:grid;  
  grid-template-columns: auto 1fr;
  grid-template-areas: 
  "img title"
  "img desc";
   img{
    grid-area: img;
  }
   p{
    grid-area: desc;
    padding: 10px;
  }
   h4{
    grid-area: title;
  }
  
  `}
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
                excerpt(truncate: true)
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
                <StyledPost as="article" key={post.id}>
                  <h4>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </h4>
                  <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
                  <p>{post.excerpt}</p>
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
