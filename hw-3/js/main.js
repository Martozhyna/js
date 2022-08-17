// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
console.log(x);
if (x!==0) {
    console.log('True');
} else {
    console.log('False');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 3;
if (time >= 0 && time <= 15) {
    console.log('It is a first quarter');
} else if (time >= 16 && time <= 30) {
    console.log('It is a second quarter');
} else if (time >= 31 && time <= 45) {
    console.log('It is a third quarter');
} else if (time >= 46 && time < 60) {
    console.log('It ia a forth quarter');
} else {
    console.log('???????');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 3;
if (day > 0 && day <= 10) {
    console.log('It is first');
} else if (day > 10 && day <= 20) {
    console.log('It is second');
} else if (day > 20 && day <= 31) {
    console.log('It is a third');
} else {
    console.log('???????');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

 switch (3) {
     case 1:
         console.log('Sunday');
         break;
     case 2:
         console.log('Monday');
         break;
     case 3:
         console.log('Tuesday')
         break;
     case 4:
         console.log('Wednesday');
         break;
     case 5:
         console.log('Thursday');
         break;
     case 6:
         console.log('Friday');
         break;
     case 7:
         console.log('Saturday');
         break;
     default:
         console.log('??????');

 }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 3;
let b = 3;
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b) {
    console.log(a);
} else {
    console.log('???????');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y = NaN || 'default';
console.log(y);