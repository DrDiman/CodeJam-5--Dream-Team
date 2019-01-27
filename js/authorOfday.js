const pathToImages = 'images/';
const pathToPages = 'personal_pages/';

const directorsListRu = [
  'Орлов Владимир Александрович',
  'Лобач Артем Александрович',
  'Аршанский Эдуард Львович',
  'Белоусов Олег Павлович',
  'Иосиф Наумовоич Вейнярович'
];

const directorsListBy = [
  'Арлоў Уладзімір Аляксандравіч',
  'Лобач Арцем Аляксандравіч',
  'Аршанскі Эдуард Львовіч',
  'Белавусаў Алег Паўлавіч',
  'Вейняровіч Іосіф Навумавіч'
];

const directorsListEn = [
  'Orlov Vladimir Alexandrovich',
  'Lobach Artem Aleksandrovich',
  'Arshansky Edward Lvovich',
  'Belousov Oleg Pavlovich',
  'Veynyarovich Iosif Naumovoich'
]

const directorsImgs = [
  'Orlov',
  'A-lobach',
  'Arshanski',
  'Belous',
  'Veinerovich'
]

const directorsLinks = [
  'orlov.html',
  'lobach.html',
  'arshanski.html',
  'belousov.html',
  'veinerovich.html'
]

const random_index = Math.floor(Math.random() * directorsListRu.length);
const director = document.querySelector('.random_director-title');
const directorImg = document.querySelector('.random img');
const directorLink = document.querySelector('.random a');

if(director)director.textContent = directorsListRu[random_index];
if(directorImg)directorImg.setAttribute('src', `${pathToImages}${directorsImgs[random_index]}.png`);
if(directorLink)directorLink.setAttribute('href', `${pathToPages}${directorsLinks[random_index]}`);

function changeAuthorOfdayLang(lang){
  if(director){
    switch (lang) {
      case 'ru': director.textContent = directorsListRu[random_index]; break;
      case 'by': director.textContent = directorsListBy[random_index]; break;
      default : director.textContent = directorsListEn[random_index]; break;
    }
  }
}
