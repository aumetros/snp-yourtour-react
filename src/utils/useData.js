import card1 from "../images/card-tour-photo-1.jpg";
import card2 from "../images/card-tour-photo-2.jpg";
import card3 from "../images/card-tour-photo-3.jpg";
import card4 from "../images/card-tour-photo-4.jpg";
import card5 from "../images/card-tour-photo-5.jpg";
import card6 from "../images/card-tour-photo-6.jpg";

import reviewFoto1 from "../images/profile-01-img.png";
import reviewFoto2 from "../images/profile-02-img.png";

export const arrCards = Array.of(card1, card2, card3, card4, card5, card6);

export const reviews = [
  {
    name: "Мария",
    text: [
      `Идейные соображения высшего порядка, а также рамки и место обучения кадров
    обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения
    высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение
    модели развития.`,
    ],
    tour: "Тур: Вдали от дома",
    foto: reviewFoto1,
  },
  {
    name: "Павел",
    text: [
      `Равным образом постоянный количественный рост и сфера нашей активности играет
    важную роль в формировании системы обучения кадров, соответствует насущным потребностям.`,
      `Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности
    обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная
    практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает
    создание модели развития.`,
    ],
    tour: "Тур: Путешествие в горы",
    foto: reviewFoto2,
  },
];
