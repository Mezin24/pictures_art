const showMoreStyles = (trigger, cardSelector) => {
  const styleEls = document.querySelectorAll(cardSelector);
  const btn = document.querySelector(trigger);

  styleEls.forEach((el) => {
    el.classList.add('animate__animated', 'animate__fadeInUp');
  });

  btn.addEventListener('click', () => {
    styleEls.forEach((el) => {
      el.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      el.classList.add(
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1'
      );
    });

    btn.remove();
  });
};

export default showMoreStyles;
