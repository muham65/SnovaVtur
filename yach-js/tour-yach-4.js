const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', function () {
    this.parentElement.classList.toggle('active');
  });
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-div1');

if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', burger.classList.contains('active') ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
