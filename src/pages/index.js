import React from "react"

import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Menu />
    <SEO title="Home" />
    <h1>Welcome to my website</h1>
    <p>This is sample site for gatsby crash course</p>
  </Layout>
)

export default IndexPage
