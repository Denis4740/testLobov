function showCalc() {
 const content = document.getElementById('content');
 content.innerHTML = `
     <h2>Калькулятор</h2>
     <input type="number" id="num1" placeholder="Первое число" />
     <input type="number" id="num2" placeholder="Второе число" />
     <br><br>
     <button onclick="calc()">Сложить</button>
     <p id="result"></p>
 `;
}

function calc() {
 const num1 = parseFloat(document.getElementById('num1').value);
 const num2 = parseFloat(document.getElementById('num2').value);
 const result = document.getElementById('result');

 if (isNaN(num1) || isNaN(num2)) {
     result.innerHTML = 'Введите оба числа.';
 } else {
     result.innerHTML = 'Результат: ' + (num1 + num2);
 }
}
function changeTitle() {
    document.querySelector("h1").innerText="Функции Jawa";
}
function checkDrink() {
    const tea = document.getElementById('tea');
    const coffee = document.getElementById('coffee');
    const messege = document.getElementById('messege');
    if (tea.checked) {
        messege.textContent = "мотор v2 закончился";
    }
    else if (coffee.checked) {
        messege.textContent = "мотор v8 закончился";
    }
            else messege.checked = "Пожалуйста выберите мотор";
        }
    
        function validateForm() {
            const checkbox = document.getElementById('agreement');
            const errorMessage = document.getElementById('error-message');
        
            if (!checkbox.checked) {
              errorMessage.style.display = 'block';
              return false; 
            } else {
              errorMessage.style.display = 'none';
              alert('Форма успешно отправлена!');
              return true;
            }
          }