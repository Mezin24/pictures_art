const modal = () => {
  let opened = false;

  const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    destroyTrigger = false
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

      if (destroyTrigger) {
        openBtns.forEach((btn) => {
          btn.remove();
        });
      }

      opened = true;
    };

    const closeModal = (modal) => {
      modal.style.display = 'none';
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = `0px`;
    };

    const closeModals = () => {
      document.querySelectorAll('[data-modal]').forEach((item) => {
        item.classList.add('animate__animated', 'animate__fadeIn');
        closeModal(item);
      });
    };

    openBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModals();
        openModal(modalSelector);
      });
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModal(modal);
      });
    });

    modal.addEventListener('click', (e) => {
      const { target } = e;

      if (target && target.matches(modalSelector)) {
        closeModal(modal);
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

  function openModalByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      console.log(scrollHeight);
      if (
        !opened &&
        window.scrollY + document.documentElement.clientHeight >=
          scrollHeight - 10
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
  // openModalByTime('.popup-consultation', 5000);
  openModalByScroll('.fixed-gift');
};

export default modal;
