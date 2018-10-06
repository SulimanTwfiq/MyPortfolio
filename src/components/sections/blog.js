import React from "react";
import { Link, StaticQuery } from "gatsby";

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
          <div>
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
          </div>
        );
      }}
    />
  );
};

export default Blog;
