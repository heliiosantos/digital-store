
import { Link } from 'react-router-dom'

import logoHeader from '../../assets/logo-header.svg'
import logoFooter from '../../assets/logo-footer.svg'

import './Logo.css'

function Logo({ variant = 'header', className = '' }) {
  const logo = variant === 'footer' ? logoFooter : logoHeader

  return (
    <Link to="/" className={`logo ${className}`}>
      <img
        src={logo}
        alt="Digital Store"
        className="logo-image"
      />
    </Link>
  )
}

export default Logo
