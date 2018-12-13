import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../../templates/Layout";
import { graphql } from "gatsby";
import { DefaultCard } from "../../components/Card";
import media from "../../components/media";
import Metatags from "../../components/Metatags";

const Container = styled(DefaultCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 4px;

  figure {
    margin: 3px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 36px;
    border-bottom: 2px rgba(255, 255, 255, 0.7) solid;
    img {
      width: 85%;
      height: 160px;
      border-radius: 15px;
      background-color: white;
      mix-blend-mode: multiply;
    }
  }
  h2 {
    grid-column: 1/-1;
  }
  ${media.tablet`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;
export const SurgeriesComponent = ({ surgeries }) => (
  <Container>
    <h2>العمليات الجراحية</h2>
    {surgeries.map(({ node: surgery }) => (
      <Link as="article" key={surgery.id} to={surgery.fields.slug}>
        <figure>
          <figcaption>{surgery.frontmatter.title}</figcaption>
          <img src={surgery.frontmatter.img} alt={surgery.frontmatter.title} />
        </figure>
      </Link>
    ))}
  </Container>
);
const Surgeries = () => {
  return (
    <StaticQuery
      query={graphql`
        query SurgeryQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "surgery-post" } } }
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
            <Metatags title={"العمليات الجراحية"} description={"اقسام العيادة"} />
            <SurgeriesComponent surgeries={surgeries} />
          </Layout>
        );
      }}
    />
  );
};

export default Surgeries;
