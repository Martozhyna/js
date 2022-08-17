// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let str1;
str1 = 'hello';
console.log(str1);
// alert(str1);
document.write(str1);

let str2 = 'owu';
console.log(str2);
// alert(str2);
document.write(str2);

let str3 = 'com';
console.log(str3);
// alert(str3);
document.write(str3);

let str4 = 'ua';
console.log(str4);
// alert(str4);
document.write(str4)

let num1 = 1;
console.log(num1);
// alert(num1);
document.write(num1);

let num2 = 10;
console.log(num2);
// alert(num2);
document.write(num2);

let num3 = -999;
console.log(num3);
// alert(num3);
document.write(num3);

let num4 = 123;
console.log(num4);
// alert(num4);
document.write(num4);

let num5 = 3.14;
console.log(num5);
// alert(num5)
document.write(num5);

let num6 = 2.7;
console.log(num6);
// alert(num6);
document.write(num6);

let num7 = 16;
console.log(num7);
// alert(num7);
document.write(num7);

let bul1 = true;
console.log(bul1);
// alert(bul1);
document.write(bul1);

let bul2 = false;
console.log(bul2);
// alert(bul2);
document.write(bul2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Bida';
let middleName = 'Marta';
let lastName = 'Serhiivna';
let space = ' ';

let person = firstName + space + middleName + space + lastName;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
console.log(a, typeof a);

let b = '100';
console.log(b, typeof b);

let c = true;
console.log(c, typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter your name,please');
console.log(name);

let secondName = prompt('Enter your second name,please');
console.log(secondName);

let age = +prompt('Enter your age,please');
console.log(age);
