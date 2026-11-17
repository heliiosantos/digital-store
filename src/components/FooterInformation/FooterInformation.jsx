
import { Link } from 'react-router-dom'

function FooterInformation({ title, informations = [] }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>

      {informations.map((item, index) => (
        item.link ? (
          <Link to={item.link} key={`${item.text}-${index}`}>
            {item.text}
          </Link>
        ) : (
          <span key={`${item.text}-${index}`}>
            {item.text}
          </span>
        )
      ))}
    </div>
  )
}

export default FooterInformation
