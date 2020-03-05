import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPost = ({ data }) => {
  useStaticQuery(
    graphql`
      query BlogPostByPath($path: String) {
        markdownRemark(frontmatter: { path: { eq: $path}}) {
          html
          frontmatter {
            title
            author
            date
          }
        }
      }
    `
  )
  
  const post = data.markdownRemark

  return (
    <div>
      <Link to='/blog'>Go back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML = {{__html: post.html }} />
    </div>
  )
}

export default  BlogPost