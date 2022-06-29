import { getResourse } from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  const createElement = ({ src, title, link }) => {
    const html = `
      <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animate__animated animate__fadeInUp">
        <div class=styles-block>
          <img src=${src} alt="styles">
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      </div>
    `;

    document.querySelector(wrapper).insertAdjacentHTML('beforeend', html);
  };

  btn.addEventListener('click', function () {
    getResourse('http://localhost:3000/styles').then((res) => {
      res.forEach((item) => {
        createElement(item);
      });
    });
    this.remove();
  });
};

export default showMoreStyles;
