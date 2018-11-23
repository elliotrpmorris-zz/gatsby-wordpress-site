import React, {Component} from "react"

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (
            <div className='page-content'>
             
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
                <hr/>
                <sup dangerouslySetInnerHTML={{__html: currentPage.date}} />
            </div>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`
