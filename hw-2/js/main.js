// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let characters = ['Mabel', 'Dipper', 'Stanley', 'Soos', 'Wendy', 'Stanford', 'Bill', 'Candy', 'Gideon', 'Robbie'];
console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);
console.log(characters[3]);
console.log(characters[4]);
console.log(characters[5]);
console.log(characters[6]);
console.log(characters[7]);
console.log(characters[8]);
console.log(characters[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: 'Alice in Wonderland',
    pageCount: 137,
    genre: 'fantasy',
    authors: [
        {
            name: 'Lewis Carroll',
            age: 65
        }
    ]
};
let book2 = {
    title: 'Charlie and the Chocolate Factory',
    pageCount: 212,
    genre: 'children literature',
    authors: [
        {
            name: 'Roald Dahl',
            age: 74
        }
    ]
};
let book3 = {
    title: 'Pippi Long-stocking',
    pageCount: 97,
    genre: 'Children novel',
    authors: [
        {
            name: 'Astrid Lindgren',
            age: 94
        }]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Mabel', username: 'Mabelthebest', password: 1111},
    {name: 'Dipper', username: 'Dipperclever', password: 2222},
    {name: 'Stanley', username: 'Stanley687', password: 3454},
    {name: 'Soos', username: 'Soooos', password: 9864},
    {name: 'Wendy', username: 'Wendied', password: 1993},
    {name: 'Stanford', username: 'Stanfordddd', password: 9847},
    {name: 'Bill', username: 'B1!!', password: 1010},
    {name: 'Candy', username: 'Candysweat', password: 2287},
    {name: 'Gideon', username: 'Gideonpig', password: 8888},
    {name: 'Robbie', username: 'Robbiecool', password: 1055}
];
console.log(users[0][`password`]);
console.log(users[1][`password`]);
console.log(users[2][`password`]);
console.log(users[3][`password`]);
console.log(users[4][`password`]);
console.log(users[5][`password`]);
console.log(users[6][`password`]);
console.log(users[7][`password`]);
console.log(users[8][`password`]);
console.log(users[9][`password`]);