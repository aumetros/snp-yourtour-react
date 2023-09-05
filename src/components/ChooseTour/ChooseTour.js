import "./ChooseTour.css";

function ChooseTour() {
  return (
    <section id="choose-tour" className="choose-tour">
      <h2 className="choose-tour__title text-section-title">Выбери свой тур</h2>
      <ul className="tours-types">
        <li>
          <button className="tours-types__type text-bold tours-types__type_active">
            Популярные
          </button>
        </li>
        <li>
          <button className="tours-types__type text-bold">Авторские</button>
        </li>
        <li>
          <button className="tours-types__type text-bold">Походы</button>
        </li>
        <li>
          <button className="tours-types__type text-bold">Сплавы</button>
        </li>
        <li>
          <button className="tours-types__type text-bold">Велопрогулки</button>
        </li>
      </ul>
      <ul className="choose-tour__cards">
        <li className="tours-card">
          <img
            className="tours-card__foto"
            src="./images/card-tour-photo-1.jpg"
            alt="tour foto"
          />
          <div className="tours-card__text-container">
            <h3 className="tours-card__title text-card-title">
              Путешествие в&nbsp;горы
            </h3>
            <p className="tours-card__subtitle">от 80 000 руб</p>
          </div>
          <button className="tours-card__forward-button text-bold">
            <span>Подробнее</span>
            <span className="tours-card__button-arrow"></span>
          </button>
          <div className="tours-card__overlay"></div>
        </li>
        <li className="tours-card">
          <img
            className="tours-card__foto"
            src="./images/card-tour-photo-2.jpg"
            alt="tour foto"
          />
          <div className="tours-card__text-container">
            <h3 className="tours-card__title text-card-title">
              Путешествие в&nbsp;горы
            </h3>
            <p className="tours-card__subtitle">от 80 000 руб</p>
          </div>
          <button className="tours-card__forward-button text-bold">
            <span>Подробнее</span>
            <span className="tours-card__button-arrow"></span>
          </button>
          <div className="tours-card__overlay"></div>
        </li>
        <li className="tours-card">
          <img
            className="tours-card__foto"
            src="./images/card-tour-photo-3.jpg"
            alt="tour foto"
          />
          <div className="tours-card__text-container">
            <h3 className="tours-card__title text-card-title">
              Путешествие в&nbsp;горы
            </h3>
            <p className="tours-card__subtitle">от 80 000 руб</p>
          </div>
          <button className="tours-card__forward-button text-bold">
            <span>Подробнее</span>
            <span className="tours-card__button-arrow"></span>
          </button>
          <div className="tours-card__overlay"></div>
        </li>
        <li className="tours-card">
          <img
            className="tours-card__foto"
            src="./images/card-tour-photo-4.jpg"
            alt="tour foto"
          />
          <div className="tours-card__text-container">
            <h3 className="tours-card__title text-card-title">
              Путешествие в&nbsp;горы
            </h3>
            <p className="tours-card__subtitle">от 80 000 руб</p>
          </div>
          <button className="tours-card__forward-button text-bold">
            <span>Подробнее</span>
            <span className="tours-card__button-arrow"></span>
          </button>
          <div className="tours-card__overlay"></div>
        </li>
        <li className="tours-card">
          <img
            className="tours-card__foto"
            src="./images/card-tour-photo-5.jpg"
            alt="tour foto"
          />
          <div className="tours-card__text-container">
            <h3 className="tours-card__title text-card-title">
              Путешествие в&nbsp;горы
            </h3>
            <p className="tours-card__subtitle">от 80 000 руб</p>
          </div>
          <button className="tours-card__forward-button text-bold">
            <span>Подробнее</span>
            <span className="tours-card__button-arrow"></span>
          </button>
          <div className="tours-card__overlay"></div>
        </li>
        <li className="tours-card">
          <img
            className="tours-card__foto"
            src="./images/card-tour-photo-6.jpg"
            alt="tour foto"
          />
          <div className="tours-card__text-container">
            <h3 className="tours-card__title text-card-title">
              Путешествие в&nbsp;горы
            </h3>
            <p className="tours-card__subtitle">от 80 000 руб</p>
          </div>
          <button className="tours-card__forward-button text-bold">
            <span>Подробнее</span>
            <span className="tours-card__button-arrow"></span>
          </button>
          <div className="tours-card__overlay"></div>
        </li>
      </ul>
    </section>
  );
}

export default ChooseTour;
