import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Menu from '../components/menu'

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              date
              title
              author
            }
          }
        }
      }
    }
  `
  )

  return (
    <Layout>
      <Menu />
      <h1>Latest Posts</h1>
      {allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
          <br/>
          <br/>
          <Link to={post.node.frontmatter.path}>Read more</Link>
          <br/>
          <br/>
        </div>
      ))}
    </Layout>
  )
}

export default Blog