const modal = () => {
  const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    closeByOverlay = true
  ) => {
    const modal = document.querySelector(modalSelector);
    const openBtns = document.querySelectorAll(triggerSelector);
    const closeBtns = document.querySelectorAll(closeSelector);
    const scroll = calcScrollWidth();

    const openModal = (modalSelector) => {
      const modal = document.querySelector(modalSelector);
      modal.style.display = 'block';
      document.body.style.overflowY = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    };

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = `0px`;
    };

    const closeModals = () => {
      document.querySelectorAll('[data-modal]').forEach(closeModal);
    };

    openBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModals();
        openModal(modalSelector);
      });
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModal();
      });
    });

    modal.addEventListener('click', (e) => {
      const { target } = e;

      if (target && target.matches(modalSelector)) {
        closeModal();
      }
    });
  };

  function calcScrollWidth() {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  const openModalByTime = (selector, time) => {
    setTimeout(() => {
      let opened;

      document.querySelectorAll('[data-modal]').forEach((modal) => {
        if (window.getComputedStyle(modal).display !== 'none') {
          opened = true;
        }
      });
      if (!opened) {
        const modal = document.querySelector(selector);
        modal.style.display = 'block';
        document.body.style.overflowY = 'hidden';
        document.body.style.marginRight = `${calcScrollWidth()}px`;
      }
    }, time);
  };

  bindModal('.button-design', '.popup-design', '.popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-close');
  openModalByTime('.popup-consultation', 5000);
};

export default modal;
