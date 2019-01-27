if(!localStorage.getItem('currentLang')){
  localStorage.setItem('currentLang', 'rus');
}

const lang = document.querySelector('.language-switch');

document.body.className = (
  localStorage.getItem('currentLang') == 'eng' ? 'en' :
    localStorage.getItem('currentLang') == 'bel' ? 'by' : 'ru'
)
lang.className = (
  localStorage.getItem('currentLang') == 'eng' ? 'language-switch eng' :
    localStorage.getItem('currentLang') == 'bel' ? 'language-switch bel' : 'language-switch rus'
)

lang.addEventListener('click', chooseLang);

function initSearch() {
  if (document.querySelector('.search')) {
    const options = {
      valueNames: [localStorage.getItem('currentLang'), 'card-summary'],
    };
    return new List('cards', options);
  }
}
initSearch('rus');

function chooseLang(e) {
  let body = document.body;
  if (e.target.classList.contains('rus')) {
    localStorage.setItem('currentLang', 'eng');
    e.target.parentNode.className = "language-switch eng";
    body.className = 'en';
    changeAuthorOfdayLang('eng');
    initSearch();
  } else if (e.target.classList.contains('eng')) {
    localStorage.setItem('currentLang', 'bel');
    e.target.parentNode.className = "language-switch bel"
    body.className = 'by';
    changeAuthorOfdayLang('bel');
    initSearch();
  } else if (e.target.classList.contains('bel')) {
    localStorage.setItem('currentLang', 'rus');
    e.target.parentNode.className = "language-switch rus"
    body.className = 'ru';
    changeAuthorOfdayLang('rus');
    initSearch();
  }
}

///////////////////

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
  'orlov000',
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
      case 'rus': director.textContent = directorsListRu[random_index]; break;
      case 'bel': director.textContent = directorsListBy[random_index]; break;
      case 'eng': director.textContent = directorsListEn[random_index]; break;
    }
  }
}

changeAuthorOfdayLang(localStorage.getItem('currentLang'))

