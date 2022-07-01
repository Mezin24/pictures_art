import { postData } from '../services/requests';

const drop = () => {
  // drag *
  // dragend *
  // dragenter - объект над dropArea
  // dragexit *
  // dragleave - объект за пределами dropArea
  // dragover - объект зависает над dropArea
  // dragstart *
  // drop - объект отправлен в dropArea

  // * - события на перетаскиваемом элементе

  const fileInputs = document.querySelectorAll('[name="upload"]');
  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefault, false);
    });
  });

  ['dragenter', 'dragover'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, (e) => {
        e.target.closest('.file_upload').style.border = '1px dashed #c51abb';
      });
    });
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, (e) => {
        e.target.closest('.file_upload').style.border = 'none';
      });
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;
      const fileName = input.files[0].name;
      const dots = fileName.length > 5 ? '...' : '.';
      let text =
        fileName.split('.')[0].slice(0, 5) + dots + fileName.split('.')[1];

      input.previousElementSibling.textContent = text;

      if (input.closest('.file_upload').getAttribute('data-input') === 'send') {
        const formData = new FormData();
        formData.append('img', input.files[0]);
        postData('assets/server.php', formData)
          .then((res) => {
            console.log(res);
          })
          .catch(() => console.log('Something went wrong!'))
          .finally(() =>
            setTimeout(
              () =>
                (input.closest('.file_upload').textContent =
                  'Фото добавлено на сервер'),
              2000
            )
          );
      }
    });
  });
};

export default drop;
