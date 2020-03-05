/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    console.log('asdf', res)
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}
