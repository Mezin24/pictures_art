const filter = () => {
  const btnWrapper = document.querySelector('.portfolio-menu');
  const btns = btnWrapper.querySelectorAll('li');
  const portfolioWrapper = document.querySelector('.portfolio-wrapper');
  const portfolios = document.querySelectorAll('.portfolio-block');
  const portfolioNo = document.querySelector('.portfolio-no');

  function changeActive(e) {
    const { target } = e;
    btns.forEach((item) => {
      item.classList.remove('active');
    });

    if (target && target.tagName === 'LI') {
      target.classList.add('active');
    }
  }

  function addFilter(e) {
    const { target } = e;
    if (!target || target.tagName !== 'LI') {
      return;
    }
    const filterCategory = target.className;
    let filtred = 0;

    portfolios.forEach((item) => {
      if (item.classList.contains(filterCategory)) {
        item.style.display = 'block';
        item.classList.add('animate__animated', 'animate__fadeIn');
        filtred++;
      } else {
        item.style.display = 'none';
        item.classList.remove('animate__animated', 'animate__fadeIn');
      }
    });

    if (filtred === 0) {
      portfolioNo.style.display = 'block';
    } else {
      portfolioNo.style.display = 'none';
    }
  }

  btnWrapper.addEventListener('click', addFilter);
  btnWrapper.addEventListener('click', changeActive);
};

export default filter;
