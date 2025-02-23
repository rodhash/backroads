import React from 'react'
import img from '../images/logo.svg'
import { PageLinks, SocialLinks } from '../data'
import SocialLink from './SocialLink'
import PageLink from './PageLink'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={img} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {PageLinks.map(link => {
            return <PageLink {...link} className="nav-link" key={link.id} />
          })}
        </ul>

        <ul className="nav-icons">
          {SocialLinks.map((link) => {
            return (
              <SocialLink {...link} key={link.id} className="nav-icon" />
            )
          })}
        </ul>
      </div>
    </nav>

  )
}

export default Navbar
