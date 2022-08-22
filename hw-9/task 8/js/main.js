// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.forms.age;
form.onsubmit = function (e) {
    e.preventDefault();
    let age = this.userAge.value;
    if (age >= 18) {
        let p = document.createElement('p');
        p.innerText = 'Face it, kid, you\'re nothing without that journal. No muscles. No brains. What are you gonna do kid, huh? What are you gonna do?'
        document.body.appendChild(p);
    } else if (age < 18) {
        alert('!!!!!!!!!!!!!!!');
    } else {
        alert('????????????????');
    }
}