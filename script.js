/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */

const cubing = numb => numb*numb*numb;
console.log('результат 2^3 степени + 3 ^ 3 степени: ' + (cubing(2) + cubing(3)));

/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"    */

let desiredSalary = prompt('Спасибо что откликрунись на нашу вакансию! введите желаемый уровень зарплаты')
let isDigit = /\d/.test(desiredSalary); // регулярка для проверки содержит ли переменная хотя бы одну цифру, потому что isNan может сконвертить в 0 некотоыре вводные
(isNaN(desiredSalary) && !isDigit) ? alert('Уровень зарплаты отражается числом. Введите число корректно') : GetSalaryWithoutTaxes(desiredSalary);

function GetSalaryWithoutTaxes(someSalary) {
    console.log(`Размер заработной платы за вычетом налогов равен ${someSalary * 0.87}`);
} 
    
/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

let groupOfNumbers = {
    number1: Number(prompt('Введите первое число')),
    number2: Number(prompt('Введите второе число')),
    number3: Number(prompt('Введите третье число'))
}

findMaxValue(groupOfNumbers);

function findMaxValue(someObject) {
    let arrayOfObjectValues = Object.values(someObject);
    alert(Math.max(...arrayOfObjectValues));
}


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let num1 = Number(prompt('Введите одно число'));
let num2 = Number(prompt('Введите второе число'));
let operators = prompt('Введите оператор (например: +, -, *, /), в зависимости от того, что хотите сделать (поделить, умножить, вычесть или сложить)');

switch (operators) {
    case '+':
        summationOfNumbers(num1,num2);
        break;
    case '-':
        subtractionOfNumbers(num1,num2);
        break;
    case '/':
        divisionOfNumbers(num1,num2);
        break;
    case '*':
        productionOfNumbers(num1,num2);
        break;
    default:
        alert('вы ввели некорректный оператор. протрите очки!');
        break;
}

function summationOfNumbers(num1,num2) {
    console.log(num1+num2);
}

function subtractionOfNumbers(num1,num2) {
    (num1 > num2) ? console.log(num1-num2) : console.log(num2-num1);   
}

function divisionOfNumbers(num1,num2) {
    console.log(num1/num2);
}

function productionOfNumbers(num1,num2) {
    console.log(num1*num2);
}