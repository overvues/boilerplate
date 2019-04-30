import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
      <p className="intro-text">
        This is an example of a static webapp managed and deployed from within
        the monorepo. If you would like more information on the services that
        make this possible, visit{' '}
        <a href="https://zeit.co/blog/now-2">Now 2.0</a>.
      </p>
    </div>
    <Link to="/">Return to Docs</Link>
  </Layout>
)

export default IndexPage
