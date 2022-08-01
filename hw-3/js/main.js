// -Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('Enter your number,please');
// // console.log(x);
// if (x!==0) {
//     console.log('Correct');
// } else  {
//     console.log('Not correct');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('What a minute?');
// if (time >= 0 && time <= 15) {
//     console.log('It is a first quarter');
// } else if (time > 15 && time <= 30) {
//     console.log('It is a second quarter');
// } else if (time > 30 && time <= 45) {
//     console.log('It is a third quarter');
// } else if (time > 45 && time <60){
//     console.log('It is a forth quarter');
// } else {
//     console.log('???????')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('What day is it today?');
// if (day >= 1 && day <= 10) {
//     console.log('It is a first decade');
// } else if (day > 10 && day <= 20) {
//     console.log('It is a second decade');
// } else if (day > 20 && day <= 31) {
//     console.log('It is a third decade');
// } else {
//     console.log('???????')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let week = +prompt('Enter the serial number of the day of the week,please');
// switch (week) {
//     case 1:
//         document.write('Monday');
//         break;
//     case 2:
//         document.write('Tuesday');
//         break;
//     case 3:
//         document.write('Wednesday');
//         break;
//     case 4:
//         document.write('Thursday');
//         break;
//     case 5:
//         document.write('Friday');
//         break;
//     case 6:
//         document.write('Saturday');
//         break;
//     case 7:
//         document.write('Sunday');
//         break;
//     default:
//         document.write('????????');
// }

//     - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.
// let firstNumber = +prompt('Enter your first number,please');
// let secondNumber = +prompt('Enter your second number,please');
// if (firstNumber>secondNumber) {
//     console.log(firstNumber);
// } else if (firstNumber<secondNumber) {
//     console.log(secondNumber);
// }else if (firstNumber === secondNumber){
//     console.log('Congratulate!');
// } else {
//     console.log('????????????');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//       за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let a = prompt('Write something') || 'default';
// console.log(a);

// let a = prompt('Write something');
// if (!a) {
//     a = 'default';
// }
// console.log(a);

// let a = NaN || 'default';
// console.log(a);