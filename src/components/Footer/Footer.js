import "./Footer.css";

function Footer() {
  return (
<footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title text">Наши социальные сети</h2>
        <ul className="socials">
          <li>
            <div className="socials__icon socials__icon_el_inst"></div>
            <a href="https://instagram.com/" className="socials__link text" target="_blank" rel="noopener noreferrer">instagram</a>
          </li>
          <li>
            <div className="socials__icon socials__icon_el_fb"></div>
            <a href="https://facebook.com/" className="socials__link text" target="_blank" rel="noopener noreferrer">facebook</a>
          </li>
          <li>
            <div className="socials__icon socials__icon_el_vk"></div>
            <a href="https://vk.ru/" className="socials__link text" target="_blank" rel="noopener noreferrer">vkontakte</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;