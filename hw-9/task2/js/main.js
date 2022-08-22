// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// // ------------------
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const courseArray of coursesArray) {
    let divA = document.createElement('div');
    divA.classList.add('head');

    document.body.appendChild(divA);

    let divC = document.createElement('div');
    divC.classList.add('divC');
    divC.innerText = `${courseArray.title}`
    divA.appendChild(divC);

    let divD = document.createElement('div');
    divD.classList.add('divD');
    divA.appendChild(divD);

    let divE = document.createElement('div');
    divE.classList.add('divE');
    divE.innerText = `Duration:${courseArray.monthDuration} month`;
    divD.appendChild(divE);

    let divF = document.createElement('div');
    divF.classList.add('divF');
    divF.innerText = `Hours:${courseArray.hourDuration}`;
    divD.appendChild(divF);

    let divB = document.createElement('div');
    divB.classList.add('bottom');
    document.body.appendChild(divB);

    let ul = document.createElement('ul');
    ul.classList.add('ul');
    divB.appendChild(ul);
    for (const ulElement of courseArray.modules) {
        let li = document.createElement('li');
        li.innerText = `${ulElement}`;
        ul.appendChild(li);

    }

}
