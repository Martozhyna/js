// - створити блок,

let div = document.createElement('div');
div.innerText = 'Dipper Pines, you don\'t know what you\'ve done! You\'ve just made the biggest mistake of your life!'

//     - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.background = 'lightblue';
div.style.color = 'black';
div.style.fontSize = 'large';
div.style.width = '450px'
div.style.marginBottom = '20px'
div.style.marginLeft = '40%'

// - додати цей блок в body.

document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.

let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

    let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${coursesAndDurationArrayElement.title}.${coursesAndDurationArrayElement.monthDuration}`;
    document.body.appendChild(div);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesInfo of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${coursesInfo.title}`;
    div.appendChild(h1);

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${coursesInfo.monthDuration}`;
    div.appendChild(p);
}











