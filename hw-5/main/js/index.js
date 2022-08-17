// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

console.log('The first task:');

// function s(a, b) {
//     return a * b;
// }
//
// console.log(s(2, 6));
let s = (a,b) =>{
    return a * b;
}
console.log(s(2, 6));
console.log('********************');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

console.log('The second task:')

function square(p, r) {
    return p * Math.pow(r, 2);
}

console.log(square(3.14, 2));
console.log('********************');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

console.log('The third task:');

function area(p, r, h) {
    return 2 * p * r * h;
}

console.log(area(3.14, 2, 3));
console.log('********************');

// - створити функцію яка приймає масив та виводить кожен його елемент

console.log('The forth task:');
let characters = ['Mabel', 'Dipper', 'Stanley', 'Soos', 'Wendy', 'Stanford', 'Bill', 'Candy', 'Gideon', 'Robbie'];

function arrayOfCharacters(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

(arrayOfCharacters(['Mabel', 'Dipper', 'Stanley', 'Soos', 'Wendy', 'Stanford', 'Bill', 'Candy', 'Gideon', 'Robbie']));
console.log('********************');

function array(arrayOfCharacters) {
    for (const character of arrayOfCharacters) {
        console.log(character);
    }
}

array(characters);
console.log('********************');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Check it out Dipper, I successfully bezazzled my face! Blink! Ow...');
document.write('******************************');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text) {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`);
}

list('Mabel\'s not here right now. She\'s in Sweater Town');
document.write('******************************');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function lists(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

lists('The future, is in the past. Onwards, Aoshima!',3);
document.write('******************************');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements = ['Mabel', 14, false];
function listsOfElements(lists) {
    document.write(`<ol>`)
    for (const list1 of lists) {
        document.write(`<li>${list1}</li>`);
    }
    document.write(`</ol>`)
}

listsOfElements(elements);
document.write('******************************');

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
function arrayOfUsers(arrayOfUser) {
    for (const arrayOfUserElement of arrayOfUser) {
        document.write(`<div>${arrayOfUserElement.id}.${arrayOfUserElement.name}.${arrayOfUserElement.age}</div>`);
    }
}

arrayOfUsers(users);
document.write('******************************');

// - створити функцію яка повертає найменьше число з масиву
let nums = [12, 34, 65, 1, 8];
let min = nums[0];
function minNums(minimal) {
    for (let i = 0; i < minimal.length; i++) {
        const minimalNums = minimal[i];
        if (minimalNums < min) {
            min = minimalNums;
            console.log(min);
        }
    }
}

minNums(nums);
console.log('********************');
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
nums = [12, 34, 65, 1, 8];
let sum = 0;

function suma(sumNums) {
    for (const sumNum of sumNums) {
        sum += sumNum;
    }
    return sum;
}

console.log(suma(nums));

