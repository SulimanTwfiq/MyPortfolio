import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { DoctorCard } from "../components/Card";
const StyledBlog = styled.section`
  text-align: center;
`;
const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        query DoctorsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "doctors-post" } } }
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
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: doctors } = data.allMarkdownRemark;
        return (
          <Layout>
            <StyledBlog>
              {doctors.map(({ node: doctor }) => (
                <DoctorCard key={doctor.id}>
                  <h2>
                    <Link to={doctor.fields.slug}>{doctor.frontmatter.title}</Link>
                  </h2>
                  <p>{doctor.frontmatter.description}</p>
                </DoctorCard>
              ))}
            </StyledBlog>
          </Layout>
        );
      }}
    />
  );
};

export default Blog;
