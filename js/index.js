const lang = document.querySelector('.language-switch');
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
    e.target.classList.toggle('rus');
    e.target.classList.toggle('eng');
    e.target.textContent = 'English';
    body.className = 'en';
    initSearch('eng');
  } else if (e.target.classList.contains('eng')) {
    e.target.classList.toggle('eng');
    e.target.classList.toggle('bel');
    e.target.textContent = 'Беларуская';
    body.className = 'by';
    initSearch('bel');
  } else if (e.target.classList.contains('bel')) {
    e.target.classList.toggle('bel');
    e.target.classList.toggle('rus');
    e.target.textContent = 'Русский';
    body.className = 'ru';
    initSearch('rus');
  }
}
