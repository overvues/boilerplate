import React from 'react'
import { Link } from 'gatsby'

interface Props {
  siteTitle: string
}

/**
 * Header Function
 */
export default function Header(props: Props) {
  return (
    <div
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem'
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  )
}
