// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
users.push(new User(1, 'Mabel', 'Pines', 'mp@gmail.com', 1111111111));
users.push(new User(2, 'Dipper', 'Pines', 'dp@gmail.com', 2222222222));
users.push(new User(3, 'Soos', 'Ramirez', 'sr@gmail.com', 3333333333));
users.push(new User(4, 'Wendy', 'Corduroy', 'wc@gmail.com', 4444444444));
users.push(new User(5, 'Stan', 'Pines', 'sr@gmail.com', 5555555555));
users.push(new User(6, 'Ford', 'Pines', 'fp@gmail.com', 6666666666));
users.push(new User(7, 'Gideon', 'Gleeful', 'gg@gmail.com', 7777777777));
users.push(new User(8, 'Bill', 'Cipher', 'bc@gmail.com', 88888888));
users.push(new User(9, 'Ivan', 'Blind', 'ib@gmail.com', 9999999999));
users.push(new User(10, 'Candy', 'Chiu', 'cc@gmail.com', 1010101010));
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter(value => value.id % 2 === 0);
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = users.sort((id1, id2) => id2.id - id1.id);
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
clients.push(new Client(1, 'Mabel', 'Pines', 'mp@gmail.com', 1111111111,['cola','pizza']));
clients.push(new Client(2, 'Dipper', 'Pines', 'dp@gmail.com', 2222222222, ['cola', 'pizza', 'salad']));
clients.push(new Client(3, 'Soos', 'Ramirez', 'sr@gmail.com', 3333333333, ['cola', 'pizza']));
clients.push(new Client(4, 'Wendy', 'Corduroy', 'wc@gmail.com', 4444444444, ['cola', 'pizza', 'salad']));
clients.push(new Client(5, 'Stan', 'Pines', 'sr@gmail.com', 5555555555, ['cola']));
clients.push(new Client(6, 'Ford', 'Pines', 'fp@gmail.com', 6666666666, ['cola']));
clients.push(new Client(7, 'Gideon', 'Gleeful', 'gg@gmail.com', 7777777777, ['cola', 'pizza']));
clients.push(new Client(8, 'Bill', 'Cipher', 'bc@gmail.com', 88888888, ['cola', 'pizza', 'salad']));
clients.push(new Client(9, 'Ivan', 'Blind', 'ib@gmail.com', 9999999999, ['cola', 'pizza']));
clients.push(new Client(10, 'Candy', 'Chiu', 'cc@gmail.com', 1010101010, ['cola', 'pizza']));
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`Модель - ${this.model}. Виробник - ${this.producer}. Рік випуску - ${this.year}. Максимальна швидкість - ${this.maxSpeed}. Об'єм - ${this.volume}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newYear) {
        this.year = newYear;
    };
    this.addDriver = function (driver) {
        this.driver = driver;

    }
}


let car = new Car('Hennessey Venom F5', 'Hennessey Special Vehicles', 2017, 484, 6.6);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2020);
car.addDriver({name: 'Mabel', age: 18});
console.log(car);
console.log('***************************************************')

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ClassCar {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive  () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

    };
    info () {
        console.log(`Модель - ${this.model}. Виробник - ${this.producer}. Рік випуску - ${this.year}. Максимальна швидкість - ${this.maxSpeed}. Об'єм - ${this.volume}`);
    };
   increaseMaxSpeed  (newSpeed) {
       console.log(this.maxSpeed += newSpeed);
    };
    changeYear  (newYear) {
        console.log(this.year = newYear);
    };
    addDriver (driver) {
        this.driver = driver;

    }
}
let firstCar = new ClassCar('Hennessey Venom F5', 'Hennessey Special Vehicles', 2017, 484, 6.6)
console.log(firstCar);
firstCar.drive();
firstCar.info();
firstCar.increaseMaxSpeed(30);
firstCar.changeYear(2018);
firstCar.addDriver({name: 'Dipper', age: 18});
console.log(firstCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [];
cinderellas.push(new Cinderella('Mabel', 13,36));
cinderellas.push(new Cinderella('Wendy', 16,39));
cinderellas.push(new Cinderella('Candy', 14,35));
cinderellas.push(new Cinderella('Grenda', 14,43));
cinderellas.push(new Cinderella('Pacifica', 14,37));
cinderellas.push(new Cinderella('Rossana', 23,38));
cinderellas.push(new Cinderella('Sandra', 31,40));
cinderellas.push(new Cinderella('Sue', 21,41));
cinderellas.push(new Cinderella('GIFfany', 16,35));
cinderellas.push(new Cinderella('Abuelita', 65,37));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princes {
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Princes('Marius von Fundshauser', 17, 43);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        console.log(cinderella);
    }
}
console.log('***************************************************');

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = cinderellas.find(value => value.footSize === prince.shoe);
console.log(find);