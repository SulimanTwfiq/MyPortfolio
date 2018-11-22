import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { DefaultCard } from "../../components/Card";

const Container = styled(DefaultCard)`
  /*  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center; */
  text-align: center;
  img {
    width: 100px;
  }
  div {
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 36px;
    border-bottom: 2px rgba(255, 255, 255, 0.7) solid;
  }
`;
const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        query SurgeryQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "surgery-page" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  description
                  img
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: surgeries } = data.allMarkdownRemark;
        return (
          <Layout>
            <Container>
              {surgeries.map(({ node: surgery }) => (
                <Link key={surgery.id} to={surgery.fields.slug}>
                  <div>
                    <h2>{surgery.frontmatter.title}</h2>
                    <img
                      src={require("../../images/surgeries/" +
                        surgery.frontmatter.img)}
                      alt={surgery.frontmatter.title}
                    />
                    <p>{surgery.frontmatter.description}</p>
                  </div>
                </Link>
              ))}
            </Container>
          </Layout>
        );
      }}
    />
  );
};

export default Blog;
