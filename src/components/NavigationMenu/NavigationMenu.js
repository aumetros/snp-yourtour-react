import "./NavigationMenu.css";

function NavigationMenu() {
  return (
    <ul className="navigation-menu">
      <li>
        <a href="#choose-tour" className="navigation-menu__item">
          Туры
        </a>
      </li>
      <li>
        <a href="#collect-tour" className="navigation-menu__item">
          Создать тур
        </a>
      </li>
      <li>
        <a href="#review" className="navigation-menu__item">
          Отзывы
        </a>
      </li>
      <li>
        <a href="#stories" className="navigation-menu__item">
          Истории
        </a>
      </li>
    </ul>
  );
}

export default NavigationMenu;
