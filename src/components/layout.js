import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import './style.css'

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Helmet>
        <meta name="description" content="Free Resources and References for Beginner Artists" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Jack" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Link to={`/`}>
          {data.site.siteMetadata.title}
        </Link>
        <Link to={`/about`}>
          About
        </Link>
      </header>
      {children}
    </div>
  )
}