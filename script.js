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