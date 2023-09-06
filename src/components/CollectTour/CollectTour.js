import "./CollectTour.css";

function CollectTour() {
  return (
    <section id="collect-tour" className="collect-tour">
      <h2 className="collect-tour__title text-section-title">
        Собери свой тур
      </h2>
      <p className="collect-tour__subtitle text">
        Идейные соображения высшего порядка, а&nbsp;также рамки и место обучения
        кадров
      </p>
      {/* <form className="tours-form">
        <fieldset className="tours-form__fieldset tours-form__fieldset_type_inputs">
          <div className="tours-form__container">
            <label className="tours-form__label text" for="name">
              Имя
            </label>
            <input
              className="tours-form__input text"
              id="name"
              name="name"
              type="text"
              placeholder="Введите Ваше имя"
              required
            />
          </div>
          <div className="tours-form__container">
            <label className="tours-form__label text" for="direction">
              Направление
            </label>
            <div className="tours-form__select-container">
              <select
                className="tours-form__select text"
                id="direction"
                name="direction"
                required
              >
                <option value="" disabled selected hidden>
                  Куда хотите ехать
                </option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Лондон">Лондон</option>
                <option value="Ямайка">Ямайка</option>
              </select>
            </div>
          </div>
          <div className="tours-form__container">
            <label className="tours-form__label text" for="email">
              Email
            </label>
            <input
              className="tours-form__input text"
              id="email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="tours-form__container">
            <label className="tours-form__label text" for="phone">
              Телефон
            </label>
            <input
              className="tours-form__input text"
              id="phone"
              name="phone"
              type="tel"
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              required
            />
          </div>
          <div className="tours-form__container">
            <label className="tours-form__label text" for="date-from">
              Дата от
            </label>
            <input
              className="tours-form__input text tours-form__date"
              id="date-from"
              name="date-from"
              type="date"
              required
            />
          </div>
          <div className="tours-form__container">
            <label className="tours-form__label text" for="date-to">
              Дата до
            </label>
            <input
              className="tours-form__input text tours-form__date"
              id="date-to"
              name="date-to"
              type="date"
              required
            />
          </div>
          <div className="tours-form__container tours-form__container_size_wide">
            <label className="tours-form__label text" for="comment">
              Комментарий
            </label>
            <textarea
              className="tours-form__comment"
              id="comment"
              name="comment"
            ></textarea>
          </div>
        </fieldset>
        <fieldset className="tours-form__fieldset tours-form__fieldset_type_checkboxes">
          <span className="tours-form__label text">Вам есть 18 лет?</span>
          <div className="tours-form__radios">
            <label
              className="tours-form__label text tours-form__label_el_radio"
              for="adult-user"
            >
              <input
                className="tours-form__radio"
                type="radio"
                name="adult"
                id="adult-user"
                value="true"
              />
              <span className="tours-form__pseudo tours-form__pseudo_type_radio"></span>
              <span>Да</span>
            </label>
            <label
              className="tours-form__label text tours-form__label_el_radio"
              for="underage-user"
            >
              <input
                className="tours-form__radio"
                type="radio"
                name="adult"
                id="underage-user"
                value="false"
              />
              <span className="tours-form__pseudo tours-form__pseudo_type_radio"></span>
              <span>Нет</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="tours-form__fieldset tours-form__fieldset_type_agree">
          <label className="tours-form__label">
            <input
              className="tours-form__checkbox"
              type="checkbox"
              name="agree"
              value="agree"
              required
            />
            <span className="tours-form__pseudo tours-form__pseudo_type_checkbox"></span>
          </label>
          <div>
            <span className="tours-form__agree-text text-small">
              Нажимая кнопку, я принимаю условия
            </span>
            <a
              className="tours-form__agree-link text-small"
              href="https://www.consultant.ru/document/cons_doc_LAW_305/"
              target="_blank"
              rel="noreferrer"
            >
              Лицензионного договора
            </a>
          </div>
        </fieldset>
        <div>
          <button className="tours-form__submit-button text" type="submit">
            Найти тур
          </button>
          <button className="tours-form__reset-button text" type="reset">
            Сбросить
          </button>
        </div>
      </form> */}
    </section>
  );
}

export default CollectTour;