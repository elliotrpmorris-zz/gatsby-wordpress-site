import React, {Component} from "react"
import Link from "gatsby-link"

class Menu extends Component {
    render() {

        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items
        console.log(data)

        return (
            <div>
                <ul className='menu-list'>
                    {data.map((item) =>
                        <li className='menu-list-item' key={item.object_slug}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Menu