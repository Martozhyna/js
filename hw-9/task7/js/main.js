// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button = document.querySelector('.click');
let p = document.getElementById('text');
console.log(p);
button.onclick = function (e) {
    document.body.removeChild(p);
    document.body.removeChild(button);
}