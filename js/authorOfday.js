const pathToImages = 'images/';
const pathToPages = 'personal_pages/';

const directorsListRu = [
  'Владимир Александрович Орлов',
  'Артем Лобач Александрович',
  'Эдуард Львович Аршанский',
  'Виктор Николаевич Аслюк',
  'Белоусов Олег Павлович',
  'Моисей Залманович Беров',
  'Петр Савельевич Василевский',
  'Иосиф Наумовоич Вейнярович'
];

const directorsListBy = [
  'Уладзімір Аляксандравіч Арлоў',
  'Арцем Лобач Аляксандравіч',
  'Эдуард Львовіч Аршанскі',
  'Віктар Мікалаевіч Аслюк',
  'Алег Паўлавіч Белавусаў',
  'Майсей Залманавіч Бераў',
  'Пятро Савельевіч Васілеўскі',
  'Іосіф Навумавіч Вейняровіч'
];

const directorsListEn = [
  'Vladimir Alexandrovich Orlov',
  'Artem Lobach Aleksandrovich',
  'Edward Lvovich Arshansky',
  'Viktor Nikolaevich Aslyuk',
  'Belousov Oleg Pavlovich',
  'Moisey Zalmanovich Berov',
  'Petr Savelievich Vasilevsky',
  'Iosif Naumovoich Veynyarovich'
]

const directorsImgs = [
  'Orlov',
  'A-lobach',
  'Arshanski',
  'Victor_Asliuk',
  'Belous',
  'Berov',
  'Savel',
  'Veinerovich'
]

const directorsLinks = [
  '#',
  '#',
  '#',
  '#',
  'belousov.html',
  '#',
  '#',
  '#'
]

const random_index = Math.floor(Math.random() * directorsListRu.length);
const director = document.querySelector('.random_director');
const directorImg = document.querySelector('.author img');
const directorLink = document.querySelector('.author a');

director.textContent = directorsListRu[random_index];
directorImg.setAttribute('src', `${pathToImages}${directorsImgs[random_index]}.png`);
directorLink.setAttribute('href', `${pathToPages}${directorsLinks[random_index]}`);

function changeAuthorOfdayLang(lang){
  switch (lang) {
    case 'ru': director.textContent = directorsListRu[random_index]; break;
    case 'by': director.textContent = directorsListBy[random_index]; break;
    default : director.textContent = directorsListEn[random_index]; break;
  }
}
