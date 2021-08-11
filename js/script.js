(function() {
  var 
    navBtn = document.querySelector('.nav-button'),
    nav = document.querySelector('.nav-inner'),
    header = document.querySelector('.page-header'),
    footer = document.querySelector('.site-footer'),
    body = document.body;

  navBtn.addEventListener('click', togglenav);
  body.addEventListener('click', closeNav, true);
  
  function togglenav() {
    nav.classList.toggle('nav-opened');
  }

  function closeNav() {
    if (nav.classList.contains('nav-opened')) {
      nav.classList.remove('nav-opened');
    }
  }
}())