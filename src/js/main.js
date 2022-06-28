import modal from './modules/modal';
import slider from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modal();
  slider(
    '.feedback-slider-item',
    'horizontal',
    '.main-prev-btn',
    '.main-next-btn'
  );
  slider('.main-slider-item', 'vertical');
});
