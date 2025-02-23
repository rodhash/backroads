import React from 'react'

const SocialLink = ({href, icon, className}) => {
  return (
    <li>
      <a href={href} target="_blank" className={className}
        ><i className={icon}></i
      ></a>
    </li>
  )
}

export default SocialLink
