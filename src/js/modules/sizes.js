const sizes = () => {
  const sizesBlocks = document.querySelectorAll('.sizes-block');

  function showPicture(e) {
    const { target } = e;
    const img = target.querySelector('img');
    const src = img.getAttribute('src');
    const newSrc = src.split('.')[0] + '-1.' + src.split('.')[1];
    img.setAttribute('src', newSrc);
    img.classList.add('animate__animated', 'animate__fadeIn');

    target.children.forEach((item) => {
      if (item.tagName !== 'IMG' && !item.classList.contains('sizes-hit')) {
        item.style.display = 'none';
      }
    });
  }

  function hidePicture(e) {
    const { target } = e;
    const img = target.querySelector('img');
    const src = img.getAttribute('src');
    const newSrc = src.split('.')[0].slice(0, -2) + '.' + src.split('.')[1];
    img.setAttribute('src', newSrc);
    img.classList.remove('animate__animated', 'animate__fadeIn');

    target.children.forEach((item) => {
      item.style.display = 'block';
    });
  }

  sizesBlocks.forEach((item) => {
    item.addEventListener('mouseenter', showPicture);
    item.addEventListener('mouseleave', hidePicture);
  });
};

export default sizes;
