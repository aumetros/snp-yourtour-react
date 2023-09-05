import "./Header.css";

function Header() {
  return (
    <header className="header">
    <div className="header__navbar">
      <div className="header__navbar-container">
        <div className="header__logo"></div>
        {/* <ul className="navigation-menu">
          <li>
            <a href="#choose-tour" className="navigation-menu__item">Туры</a>
          </li>
          <li>
            <a href="#collect-tour" className="navigation-menu__item">Создать тур</a>
          </li>
          <li>
            <a href="#review" className="navigation-menu__item">Отзывы</a>
          </li>
          <li>
            <a href="#stories" className="navigation-menu__item">Истории</a>
          </li>
        </ul> */}
        <a href="tel:+79999999999" className="header__phone-number text">+7 999 999 99 99</a>
      </div>
    </div>
    <h1 className="header__title">Идеальные путешествия существуют</h1>
    <p className="header__subtitle text">Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
    <button className="header__find-button" type="button">Найти тур</button>
  </header>
  )
}

export default Header;