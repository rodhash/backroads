import React from 'react'
import { PageLinks, SocialLinks } from '../data'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">

        {PageLinks.map((link) => {
          return <PageLink {...link} className="footer-link" key={link.id} />
        })}

      </ul>
      <ul className="footer-icons">
        {SocialLinks.map((link) => {
          return <SocialLink {...link} key={link.id} className="footer-icon" />
        })}

      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>

  )
}

export default Footer
