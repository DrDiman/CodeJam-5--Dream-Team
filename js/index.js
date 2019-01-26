
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

function chooseLang(e) {
  let body = document.body;
  if (e.target.classList.contains('rus')) {
    localStorage.setItem('currentLang', 'eng');
    e.target.parentNode.className = "language-switch eng";
    body.className = 'en';
  } else if (e.target.classList.contains('eng')) {
    localStorage.setItem('currentLang', 'bel');
    e.target.parentNode.className = "language-switch bel"
    body.className = 'by';
  } else if (e.target.classList.contains('bel')) {
    localStorage.setItem('currentLang', 'rus');
    e.target.parentNode.className = "language-switch rus"
    body.className = 'ru';
  }
}
