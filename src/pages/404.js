import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import { siteMetadata } from '../../gatsby-config'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

class Sorry extends React.Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="404" />
        <section className="text-center">
          <div className="container">
            <h1>404 page</h1>
            <div>
              <p>Sorry, you arrived to a page that don't exist anymore!</p>
              <p>Use the menu in the navigation bar to choose another page.</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default Sorry
