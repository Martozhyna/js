// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function s(a,b) {
    return a * b;
}
console.log(s(3, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function a(p, r, n) {
    return Math.pow(p * r, n);
}
console.log(a(3.14, 2, 2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function area(n, p, r, h) {
    return n * p * r * h;
}
console.log(area(2, 3.14, 3.5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let characters = ['Mabel', 'Dipper', 'Stanley', 'Soos', 'Wendy', 'Stanford', 'Bill', 'Candy', 'Gideon', 'Robbie'];
function person(characters) {
    for (const arrayElement of characters) {
        console.log(arrayElement);
    }
}
person(characters)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph('Mabel');
paragraph('Dipper');
paragraph('Stanley');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text) {
    document.write(`<ul>
  <li>${text}</li>
   <li>${text}</li>
    <li>${text}</li>
  </ul>`);
}

list('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function lists(text, n) {
    document.write(`<ul>`);
for (let i =0; i<=n; i++) {
    document.write(`<li>${text}</li>`);
}
    document.write(`</ul>`);
}

lists("text",3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let inf = ['Mabel', 14, true, 'Dipper', 13, false];
function information(inf) {
    document.write(`<ul>`);
    for (const infElement of inf) {
        document.write(`<li>${infElement}</li>`)
    }
    document.write(`</ul>`);
}

information(inf);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 'Mabel', name: 'Mabelthebest', age: 14},
    {id: 'Dipper', name: 'Dipperclever', age: 14},
    {id: 'Stanley', name: 'Stanley687', age: 54},
    {id: 'Soos', name: 'Soooos', age: 23},
    {id: 'Wendy', name: 'Wendied', age: 16},
    {id: 'Stanford', name: 'Stanfordddd', age: 54},
    {id: 'Bill', name: 'B1!!', age: 1010},
    {id: 'Candy', name: 'Candysweat', age: 14},
    {id: 'Gideon', name: 'Gideonpig', age: 12},
    {id: 'Robbie', name: 'Robbiecool', age: 16}
];

function array(users) {
    for (const user of users) {
        document.write(`<div>
ID: ${user.id}. Name: ${user.name}. Age: ${user.age}
</div>`);
    }
}
array(users);

// - створити функцію яка повертає найменьше число з масиву

let numbers = [21, 15, 44, 45, 3];
function minNumbers(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[0] > numbers[i]) {
            min = numbers[i];
        }

    }
    return min;
}

console.log(minNumbers(numbers))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let num = [12, 3, 7];
function sum(num) {
    let x = 0;
    for (const numElement of num) {
        x += numElement;
    }
    return x;
}

console.log(sum(num));