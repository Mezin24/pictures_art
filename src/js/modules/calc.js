const calc = (size, material, options, promocode, result, state) => {
  const sizeEl = document.querySelector(size);
  const materialEl = document.querySelector(material);
  const optionsEl = document.querySelector(options);
  const promocodeEl = document.querySelector(promocode);
  const resultEl = document.querySelector(result);

  const calcResult = () => {
    let sum = 0;

    sum = Math.round(+sizeEl.value * +materialEl.value + +optionsEl.value);
    state[sizeEl.id] = sizeEl.value;
    state[materialEl.id] = materialEl.value;
    state[optionsEl.id] = optionsEl.value;
    state.promocode = promocodeEl.value === 'IWANTPOPART';
    state.result = sum;

    if (sizeEl.value === '' || materialEl.value === '') {
      resultEl.textContent = 'Выберите пожалуйста размер и материал.';
    } else if (promocodeEl.value === 'IWANTPOPART') {
      resultEl.textContent = Math.round(sum * 0.7);
    } else {
      resultEl.textContent = sum;
    }
  };

  sizeEl.addEventListener('change', calcResult);
  materialEl.addEventListener('change', calcResult);
  optionsEl.addEventListener('change', calcResult);
  promocodeEl.addEventListener('input', calcResult);
};

export default calc;
