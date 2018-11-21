import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { DefaultCard } from "../../components/Card";
import Ear from "../../img/surgeries/ear.svg";
import Eye from "../../img/surgeries/eye.svg";
import Face from "../../img/surgeries/face.svg";
import Nose from "../../img/surgeries/nose.svg";
import Img from "gatsby-image";

const Container = styled.section`
  text-align: center;
`;
const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        query SurgeryQuery {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "surgery-page" } } }) {
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
            <DefaultCard>
              {surgeries.map(({ node: surgery }) => (
                <div key={surgery.id}>
                  <h2>
                    <Link to={surgery.fields.slug}>{surgery.frontmatter.title}</Link>
                  </h2>
                  <img src={"../../img/surgeries/" + surgery.frontmatter.img} alt={surgery.frontmatter.title} />

                  <img src={Ear} />

                  <p>{surgery.frontmatter.description}</p>
                </div>
              ))}
            </DefaultCard>
          </Layout>
        );
      }}
    />
  );
};

export default Blog;
