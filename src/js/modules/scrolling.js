const scrolling = () => {
  const links = document.querySelectorAll('[href^="#"]');
  const btnUp = document.querySelector('.pageup');

  window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop > 1650) {
      btnUp.classList.remove('animate__animated', 'animate__fadeOut');
      btnUp.classList.add('animate__animated', 'animate__fadeIn');
    } else {
      btnUp.classList.remove('animate__animated', 'animate__fadeIn');
      btnUp.classList.add('animate__animated', 'animate__fadeOut');
    }
  });

  links.forEach((item) => {
    item.addEventListener('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();

        //Old way

        const targetEl = document.querySelector(this.hash);
        const targetElCoords = targetEl.getBoundingClientRect();

        window.scrollTo({
          left: targetElCoords.left + window.scrollX,
          top: targetElCoords.top + window.scrollY,
          behavior: 'smooth',
        });

        // modern browsers
        // targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

export default scrolling;
