import React from 'react'
import { Link } from 'gatsby'
import LangSwitcher from 'components/LangSwitcher'
import logo from '../../../content/images/Walter_Perdan_visual_artist_logo.svg'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div>
        <div>
          <LangSwitcher />
          <Link className="text-center" to="/">
            <img src={logo} alt="Walter Perdan logo" className="Logo" />
          </Link>
          <p className="text-left">Walter Perdan visual artist</p>
        </div>
        <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
          <div className="container">
            <Link className="text-center" to="/">
              <h1 className="navbar-brand mb-0">{title}</h1>
            </Link>
            <div className="navbar-nav-scroll">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/profile/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/blog/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/blog/" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
          </div>
        </nav>
      </div>
    )
  }
}

export default Navi
