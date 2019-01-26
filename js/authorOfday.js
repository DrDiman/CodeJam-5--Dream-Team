const pathToImages = 'images/';

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

const random_index = Math.floor(Math.random() * (directorsListRu.length - 1));
const director = document.querySelector('.random_director');
const directorImg = document.querySelector('.author img');
const directorLink = document.querySelector('.author a');

director.textContent = directorsListRu[random_index];
directorImg.setAttribute('src', `${pathToImages}${directorsImgs[random_index]}.png`);
directorLink.setAttribute('href', `#`);

function changeAuthorOfdayLang(lang){
  switch (lang) {
    case 'ru': director.textContent = directorsListRu[random_index]; break;
    case 'by': director.textContent = directorsListBy[random_index]; break;
    default : director.textContent = directorsListEn[random_index]; break;
  }
}
