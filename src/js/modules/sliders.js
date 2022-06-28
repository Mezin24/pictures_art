const slider = (slide, dirrection, prevBtn, nextBtn) => {
  let slideIndex = 1;
  let paused = false;

  const slides = document.querySelectorAll(slide);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => {
      slide.classList.add('animate__animated');
      slide.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);

  function plusSlide(n) {
    showSlides((slideIndex += n));
  }

  try {
    const prev = document.querySelector(prevBtn),
      next = document.querySelector(nextBtn);

    prev.addEventListener('click', () => {
      plusSlide(-1);
      slides[slideIndex - 1].classList.remove('animate__slideInLeft');
      slides[slideIndex - 1].classList.add('animate__slideInRight');
    });

    next.addEventListener('click', () => {
      plusSlide(1);
      slides[slideIndex - 1].classList.remove('animate__slideInRight');
      slides[slideIndex - 1].classList.add('animate__slideInLeft');
    });
  } catch (e) {}

  function activeteAnimation() {
    if (dirrection === 'vertical') {
      paused = setInterval(() => {
        plusSlide(1);
        slides[slideIndex - 1].classList.remove('animate__slideInUp');
        slides[slideIndex - 1].classList.add('animate__slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlide(1);
        slides[slideIndex - 1].classList.remove('animate__slideInRight');
        slides[slideIndex - 1].classList.add('animate__slideInLeft');
      }, 3000);
    }
  }
  activeteAnimation();

  slides[0].parentNode.addEventListener('mouseover', () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener('mouseleave', () => {
    activeteAnimation();
  });
};

export default slider;
