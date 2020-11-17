import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>This is home page.</p>
      <h2>Posts (ordered by date)</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}><h3>{node.frontmatter.title}</h3></Link>
            <div>Author: <i>{node.frontmatter.author}</i></div>
            <div>Date: <i>{node.frontmatter.date}</i></div>
            <div>Category: <i>{node.frontmatter.category}</i></div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          title
          author
          date(formatString: "MMMM DD, YYYY")
          category
        }
        fields {
          slug
        }
      }
    }
  }
}

`