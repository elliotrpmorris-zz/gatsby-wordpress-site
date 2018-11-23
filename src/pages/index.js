import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Menu from '../components/menu'

const IndexPage = ({data}) => (
  <div>
      <div className='page-content'>
        <h1 className='page-content-inner'>Welcome to your new Gatsby site.</h1>
      </div>   
      <Menu menu={data} />
  </div>
)

export default IndexPage

export const query = graphql`
  query LayoutQuery {
        allWordpressWpApiMenusMenusItems{
            edges{
                node{
                    id
                    name
                    items{
                        title
                        url
                        object_slug
                    }
                }
            }
        }
  }
  `