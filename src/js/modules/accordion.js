const accordion = (triggerSelector, blockSelector) => {
  const btns = document.querySelectorAll(triggerSelector);
  const blocks = document.querySelectorAll(blockSelector);

  function hideBlock(block) {
    block.classList.remove(
      'animate__animated',
      'animate__fadeInDown',
      'active-block'
    );
    block.style.maxHeight = '0';
  }

  btns.forEach((item) => {
    item.addEventListener('click', function () {
      this.classList.toggle('active-style');

      if (this.classList.contains('active-style')) {
        blocks.forEach((item) => {
          hideBlock(item);
        });
        btns.forEach((btn) => {
          if (btn !== this) {
            btn.classList.remove('active-style');
          }
        });

        this.nextElementSibling.classList.add(
          'animate__animated',
          'animate__fadeInDown',
          'active-block'
        );

        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        hideBlock(this.nextElementSibling);
      }
    });
  });
};

export default accordion;
