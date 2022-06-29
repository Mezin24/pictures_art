import { postData } from '../services/requests';

const forms = (state) => {
  const forms = document.querySelectorAll('form');
  const fileInputs = document.querySelectorAll('[type="file"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро с вами свяжутся',
    failure: 'Что-то пошло не так',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php',
  };

  fileInputs.forEach((input) => [
    input.addEventListener('input', () => {
      const fileName = input.files[0].name;
      const dots = fileName.length > 5 ? '...' : '.';
      let text =
        fileName.split('.')[0].slice(0, 5) + dots + fileName.split('.')[1];

      input.previousElementSibling.textContent = text;
    }),
  ]);

  function clearInputs() {
    document.querySelectorAll('input').forEach((item) => {
      item.value = '';
    });
  }

  forms.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.classList.add('animate__animated', 'animate__fadeOutUp');

      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      statusMessage.classList.add('animate__animated', 'animate__fadeInUp');
      const statusImg = document.createElement('img');
      const statusText = document.createElement('div');
      statusMessage.append(statusImg);
      statusMessage.append(statusText);
      statusImg.setAttribute('src', message.spinner);
      statusText.textContent = message.loading;

      setTimeout(() => {
        item.parentNode.append(statusMessage);
      }, 400);

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        for (let prop in state) {
          formData.append(prop, state[prop]);
          console.log(`${prop}: ${state[prop]}`);
        }
      }

      const api = item.classList.contains('form-calc')
        ? path.designer
        : path.question;

      postData(api, formData)
        .then((res) => {
          statusImg.setAttribute('src', message.ok);
          statusText.textContent = message.success;
          console.log(res);
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          statusText.textContent = message.failure;
        })
        .finally(() => {
          item.reset();
          document.querySelectorAll('[type="file"]').forEach((item) => {
            item.previousElementSibling.textContent = 'Фаил не выбран';
          });
          if (item.getAttribute('data-calc') === 'end') {
            item.querySelector('.calc-price').textContent =
              'Для расчета нужно выбрать размер картины и материал картины';
          }
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('animate__fadeOutUp');
            item.classList.add('animate__fadeInUp');
          }, 5000);
        });
    });
  });
};

export default forms;
