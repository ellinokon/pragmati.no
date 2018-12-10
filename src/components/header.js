import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import LogoIcon from '../assets/svg/pragmati-logo.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      width: 'calc(3rem * 5.25)',
      maxWidth: '100%',
      height: '3rem',
      margin: '3rem 0',
    }}
  >
    <LogoIcon style={{ width: '100%', height: '100%' }} />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
