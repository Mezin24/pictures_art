import modal from './modules/modal';
import slider from './modules/sliders';
import forms from './modules/forms';
import checkTextInput from './modules/checkTextInput';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';

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
  forms();
  mask('[name="phone"]');
  checkTextInput('[name="name"]');
  checkTextInput('[name="message"]');
  showMoreStyles('.button-styles', '.styles-2');
});
