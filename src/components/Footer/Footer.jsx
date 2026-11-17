
import Logo from '../Logo/Logo'
import FooterInformation from '../FooterInformation/FooterInformation'

import './Footer.css'

const informationLinks = [
  { text: 'Sobre Drip Store', link: '/sobre' },
  { text: 'Segurança', link: '/seguranca' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/trabalhe-conosco' },
  { text: 'Meus Pedidos', link: '/meus-pedidos' },
]

const categories = [
  { text: 'Camisetas', link: '/produtos' },
  { text: 'Calças', link: '/produtos' },
  { text: 'Bonés', link: '/produtos' },
  { text: 'Headphones', link: '/produtos' },
  { text: 'Tênis', link: '/produtos' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <Logo variant="footer" className="footer-logo" />

          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/src/assets/facebook.svg" alt="" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/src/assets/instagram.svg" alt="" />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src="/src/assets/twitter.svg" alt="" />
            </a>
            </div>
          </div>

        <FooterInformation
          title="Informação"
          informations={informationLinks}
        />

        <FooterInformation
          title="Categorias"
          informations={categories}
        />

        <div className="footer-column footer-contact">
          <h3>Contato</h3>

          <p>
            Av. Santos Dumont, 1510 - 1 andar -
            Aldeota, Fortaleza - CE, 60150-161
          </p>

          <p>(85) 3051-3411</p>
        </div>

      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2024 Digital Store</p>
      </div>
    </footer>
  )
}

export default Footer
