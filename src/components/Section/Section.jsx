
import { Link } from 'react-router-dom'
import './Section.css'

function Section({
  title,
  titleAlign = 'left',
  link,
  children,
}) {
  return (
    <section className="shared-section">
      <div className={`shared-section-header ${titleAlign}`}>
        <h2>{title}</h2>

        {link && (
          <Link to={link.href}>
            {link.text}
          </Link>
        )}
      </div>

      <div className="shared-section-content">
        {children}
      </div>
    </section>
  )
}

export default Section
