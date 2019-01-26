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

function initSearch(target) {
  if (document.querySelector('.search')) {
    const options = {
      valueNames: [target, 'card-summary'],
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
    changeAuthorOfdayLang('en');
    initSearch('eng');
  } else if (e.target.classList.contains('eng')) {
    localStorage.setItem('currentLang', 'bel');
    e.target.parentNode.className = "language-switch bel"
    body.className = 'by';
    changeAuthorOfdayLang('by');
    initSearch('bel');
  } else if (e.target.classList.contains('bel')) {
    localStorage.setItem('currentLang', 'rus');
    e.target.parentNode.className = "language-switch rus"
    body.className = 'ru';
    changeAuthorOfdayLang('ru');
    initSearch('rus');
  }
}
