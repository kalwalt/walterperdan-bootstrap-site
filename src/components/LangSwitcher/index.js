import React from 'react'
import { Link } from 'gatsby'
import en from '../../../content/images/en_gb.gif'
import it from '../../../content/images/it_it.gif'

class LangSwitcher extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <ul className="navbar-nav bd-navbar-nav flex-row">
        <li className="nav-item">
          <Link className="navbar">
            <img src={en} href="#" alt="Walter Perdan logo" className="Logo" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="navbar">
            <img src={it} href="#" alt="Walter Perdan logo" className="Logo" />
          </Link>
        </li>
      </ul>
    )
  }
}

export default LangSwitcher
