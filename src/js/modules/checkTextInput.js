const checkTextInput = (selector) => {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((item) => {
    item.addEventListener('keypress', (e) => {
      if (!e.key.match(/[а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });

    item.addEventListener('blur', function (e) {
      this.value = this.value.replace(/[a-z]/gi, '');
    });
  });
};

export default checkTextInput;
