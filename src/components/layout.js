import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
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