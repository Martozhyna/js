// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let s = 'hello world';
console.log(s.length);
console.log('***************');

let str = 'lorem ipsum';
console.log(str.length);
console.log('***************');

let string = 'javascript is cool';
console.log(string.length);
console.log('***************');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let sUpper = s.toUpperCase()
console.log(sUpper);
console.log('***************');

let strUpper = str.toUpperCase();
console.log(strUpper);
console.log('***************');

let stringUpper = string.toUpperCase();
console.log(stringUpper);
console.log('***************');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(sUpper.toLowerCase());
console.log('***************');

console.log(strUpper.toLowerCase());
console.log('***************');

console.log(stringUpper.toLowerCase());
console.log('***************');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str1 = ' dirty string   '
console.log(str1.substring(1, 13));
console.log('***************');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';

function stringToarray(string) {
    string.split(' ');
    return string;
}

let arr = stringToarray(str2);
console.log(arr);
console.log('***************');

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let n = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = n.map(value => value + '');
console.log(map);
console.log('***************');

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        console.log(nums.sort((num1, num2) => {
            return num1 - num2;
        }));
    }
    if (direction === 'descending') {
        console.log(nums.sort((num1, num2) => {
            return num2 - num1;
        }));
    }
}

sortNums(nums, 'ascending');
console.log('***************');

sortNums(nums, 'descending')
console.log('***************');

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
});
console.log(sort);
console.log('***************');

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);
console.log('***************');

// описати колоду карт

let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},

];

// - знайти піковий туз
let findSpadesAce = cards.find(value => value.cardSuit === 'spades' && value.value === 'Ace');
console.log(findSpadesAce);
console.log('***************');

// - всі шістки

cards.map(value => {
    if (value.value === 6) {
        console.log(value);
    }
})
console.log('***************');

// - всі червоні карти

cards.map(value => {
    if (value.color === 'red') {
        console.log(value);
    }
})
console.log('***************');

// - всі буби

cards.map(value => {
    if (value.cardSuit === 'diamonds') {
        console.log(value);
    }
})
console.log('***************');

// - всі трефи від 9 та більше

cards.map(value => {
    if (value.cardSuit === 'clubs' && value.value > 8) {
        console.log(value);
    }
})
console.log('***************');
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let filterCards = cards.reduce(function (cardsSuit, card) {
    if (card.cardSuit === 'clubs') {
        cardsSuit.clubs.push(card);
    }
    if (card.cardSuit === 'diamonds') {
        cardsSuit.diamonds.push(card);
    }
    if (card.cardSuit === 'hearts') {
        cardsSuit.hearts.push(card);
    }
    if (card.cardSuit === 'spades') {
        cardsSuit.spades.push(card);
    }
    return cardsSuit;
},{spades:[],diamonds:[],hearts:[],clubs:[]});

console.log(filterCards);

