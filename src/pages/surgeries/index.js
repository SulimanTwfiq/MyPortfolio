import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { DefaultCard } from "../../components/Card";

const Container = styled(DefaultCard)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  text-align: center;
  img {
    width: 100px;
  }
  div {
    margin: 3px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 36px;
    border-bottom: 2px rgba(255, 255, 255, 0.7) solid;
    padding: 5px 2px;
  }
  h2 {
    grid-column: 1/-1;
  }
`;
export const SurgeriesComponent = ({ surgeries }) => (
  <Container>
    <h2>العمليات الجراحية</h2>
    {surgeries.map(({ node: surgery }) => (
      <Link key={surgery.id} to={surgery.fields.slug}>
        <div>
          <h4>{surgery.frontmatter.title}</h4>
          <img
            src={require("../../images/surgeries/" + surgery.frontmatter.img)}
            alt={surgery.frontmatter.title}
          />
          <p>{surgery.frontmatter.description}</p>
        </div>
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
            <SurgeriesComponent surgeries={surgeries} />
          </Layout>
        );
      }}
    />
  );
};

export default Surgeries;
