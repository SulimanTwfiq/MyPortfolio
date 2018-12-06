import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { DefaultCard } from "../components/Card";
import Metatags from "../components/Metatags";

export const SurgeryPage = ({ title, content, img }) => {
  return (
    <DefaultCard
      css={`
        img {
          width: 170px;
        }
      `}
    >
      <Metatags title={title} description={content} />
      {/* <span> 🡲</span> */}
      <h2> {title} </h2>
      <img src={img} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </DefaultCard>
  );
};

const SurgeryPageTemplate = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SurgeryPage
        content={post.html}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        img={post.frontmatter.img}
      />
    </Layout>
  );
};

export default SurgeryPageTemplate;

export const SurgeryPageQuery = graphql`
  query SurgeryPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        img
      }
    }
  }
`;
