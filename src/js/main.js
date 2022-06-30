import modal from './modules/modal';
import slider from './modules/sliders';
import forms from './modules/forms';
import checkTextInput from './modules/checkTextInput';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import sizes from './modules/sizes';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let formState = {};

  modal();
  slider(
    '.feedback-slider-item',
    'horizontal',
    '.main-prev-btn',
    '.main-next-btn'
  );
  slider('.main-slider-item', 'vertical');
  forms(formState);
  mask('[name="phone"]');
  checkTextInput('[name="name"]');
  checkTextInput('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc(
    '#size',
    '#material',
    '#options',
    '.promocode',
    '.calc-price',
    formState
  );

  filter();
  sizes();
  accordion('.accordion-heading', '.accordion-block');
});
