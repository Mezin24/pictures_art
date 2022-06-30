const burger = (btnSelector, menuSelector) => {
  const btn = document.querySelector(btnSelector);
  const menu = document.querySelector(menuSelector);
  btn.style.zIndex = 100;

  btn.addEventListener('click', () => {
    if (menu.style.display === 'none' && window.screen.availWidth < 993) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menu.style.display = 'none';
    }
  });
};

export default burger;
