// --створити масив з:
//     - з 5 числових значень
//     - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль

let array = [[16, 17, 127, 65, 48], ['Hazel', 'Rodi', 'Basil', 'Webster', 'Lavrenia'], ['Princess', 110, true, 114, false]];
for (const arrayElement of array) {
    console.log(arrayElement);
}
console.log('**************************************');

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let persons = [];
persons[0] = 'Mabel';
persons[1] = 'Dipper';
persons [2] = 'Soos';
console.log(persons);
for (const person of persons) {
    console.log(person);
}
console.log('**************************************');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}
console.log('**************************************');

//     2. перебрати його циклом for

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log('**************************************');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

index = 0;
while (index < numbers.length) {
    if ((index % 2) === 1) {
        console.log(numbers[index]);
    }
    index++;
}
console.log('**************************************');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < numbers.length; i++) {
    if ((i % 2) === 0) {
        console.log(numbers[i]);
    }
}
console.log('**************************************');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

index = 0;
while (index < numbers.length) {
    if ((numbers[index] % 2) === 0) {
        console.log(numbers[index]);
    }
    index++;
}
console.log('**************************************');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
        console.log(numbers[i]);
    }
}
console.log('**************************************');

// 7. замінити кожне число кратне 3 на слово "okten"
for (const number of numbers) {
    if ((number % 3) === 0) {
        console.log('okten');
    } else {
        console.log(number);
    }
}
console.log('**************************************');

// 8. вивести масив в зворотньому порядку.
for (let i = numbers.length - 1; i >= 0; i--) {
    const number = numbers[i];
    console.log(number);
}
console.log('**************************************');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1. перебрати його циклом while

let ind = numbers.length - 1;
while (ind >= 0) {
    console.log(numbers[ind]);
    ind--;
}
console.log('**************************************');

// 9.2. перебрати його циклом for

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
console.log('**************************************');

// // 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом

ind = numbers.length - 1;
while (ind >= 0) {
    if ((ind % 2) === 1) {
        console.log(numbers[ind]);
    }
    ind--;
}
console.log('**************************************');

// // 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = numbers.length - 1; i >= 0; i--) {
    if ((i % 2) === 0) {
        console.log(numbers[i]);
    }
}
console.log('**************************************');

// // 9.5. перебрати циклом while та вивести  числа тільки парні  значення

ind = numbers.length - 1;
while (ind >= 0) {
    if ((numbers[ind] % 2) === 0) {
        console.log(numbers[ind]);
    }
    ind--;
}
console.log('**************************************');

// //9.6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = numbers.length - 1; i >= 0; i--) {
    if ((numbers[i] % 2) === 0) {
        console.log(numbers[i]);
    }
}
console.log('**************************************');

// // 7. замінити кожне число кратне 3 на слово "okten"
for (let i = numbers.length - 1; i >= 0; i--) {
    let number = numbers[i];
    if ((number % 3) === 0) {
        console.log('okten');
    } else {
        console.log(number);
    }
}
console.log('**************************************');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of nums) {
    console.log(num);
}
console.log('**************************************');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let characters = ['Mabel', 'Dipper', 'Soos', 'Wendy', 'Stan', 'Stanford', 'Gideon', 'Bill', 'Pacifica', 'Ivan'];
for (const character of characters) {
    console.log(character);
}
console.log('**************************************');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let a = ['Mabel', 13, true, 'Dipper', 14, false, 'Soos', 22, false, 'Wendy'];
for (const aElement of a) {
    console.log(aElement);
}
console.log('**************************************');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const aElement of a) {
    if (typeof aElement === "boolean") {
        console.log(aElement);
    }
}
console.log('**************************************');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const aElement of a) {
    if (typeof aElement === "number") {
        console.log(aElement);
    }
}
console.log('**************************************');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const aElement of a) {
    if (typeof aElement === "string") {
        console.log(aElement);
    }
}
console.log('**************************************');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let ar = [];
ar[0] = 'Mabel';
ar[1] = 13;
ar[2] = true;
ar[3] = 'Dipper';
ar[4] = 14;
ar[5] = false;
ar[6] = 'Soos';
ar[7] = 22;
ar[8] = false;
ar[9] = 'Wendy';
for (const arElement of ar) {
    console.log(arElement);
}
console.log('**************************************');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('step :', i);
    document.write('step :', i);
}
console.log('**************************************');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log('step :', i);
    document.write(`<div>step: ${i}</div>`);
}
console.log('**************************************');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log('step :', i);
    document.write(`<div>step: ${i}</div>`);
}
console.log('**************************************');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if ((i % 2) === 0) {
        console.log(i);
        document.write(`<div>${i}</div>`)

    }
}
document.write('***********************');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if ((i % 2) === 1) {
        console.log(i);
        document.write(`<div>${i}</div>`)

    }
}
document.write('***********************');

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title: 'Alice in Wonderland', pageCount: 137, authors: ['Lewis Carroll'], genre: ['children literature']},
    {title: 'Charlie and the Chocolate Factory', pageCount: 212, authors: ['Roald Dahl'], genre: ['children literature', 'fantasy']},
    {title: 'Harry Potter', pageCount: 564, authors: ['Rowling'], genre: ['children literature']},
    {title: 'Pippi Long-stocking', pageCount: 97, authors: ['Astrid Lindgren', 'I'], genre: ['children literature']},
    {title: 'Peter Pan', pageCount: 56, authors: ['J. M. Barrie'], genre: ['children literature']}
];

// -знайти наібльшу книжку.
let maxPage = books[0];
for (const book of books) {
    if (book.pageCount > maxPage.pageCount) {
        maxPage = book;
    }
}
console.log(maxPage);
console.log('**************************************');

// - знайти книжку/ки з найбільшою кількістю жанрів

let maxGenre = books[0];
for (const book of books) {
    if (book.genre > maxGenre.genre) {
        maxGenre = book;
    }
}
console.log(maxGenre);
console.log('**************************************');

// - знайти книжку/ки з найдовшою назвою
let maxTitle = books[0];
for (const book of books) {
    if (book.title.length > maxTitle.title.length) {
        maxTitle = book;
    }
}
console.log(maxTitle);
console.log('**************************************');
// - знайти книжку/ки які писали 2 автори
for (const book of books) {
    if (book.authors.length === 2) {
        console.log(book);
    }
}
console.log('**************************************');

// - знайти книжку/ки які писав 1 автор
for (const book of books) {
    if (book.authors.length === 1) {
        console.log(book);
    }
}
console.log('**************************************');