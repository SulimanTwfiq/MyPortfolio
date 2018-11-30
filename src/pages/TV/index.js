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
 text-align:center;
`;
const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        query InterviewsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "TV-post" } } }
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
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: interviews } = data.allMarkdownRemark;

        return (
          <Layout>
            <DefaultCard center>
              {interviews.map(({ node: interview }) => (
                <StyledPost key={interview.id}>
                  <h4>
                    <Link to={interview.fields.slug}>{interview.frontmatter.title}</Link>
                  </h4>
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