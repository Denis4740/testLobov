const button = document.createElement('button');


  button.textContent = 'Отправить';


  button.addEventListener('click', function() {
   
    button.textContent = 'Текст отправлен';
  });


  document.querySelector('.content').appendChild(button);