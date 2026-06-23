const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', function() {
    this.parentElement.classList.toggle('active');
  });
});

function filterSelection(c, btn) {
  var x, i;
  x = document.getElementsByClassName("card-1");

  if (c == "all") {
      for (i = 0; i < x.length; i++) {
          x[i].classList.remove("hide");
      }
  } else {
      for (i = 0; i < x.length; i++) {
          x[i].classList.add("hide");
          if (x[i].classList.contains(c)) {
              x[i].classList.remove("hide");
          }
      }
  }

  var btns = document.getElementsByClassName("filter-btn");
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }

  btn.classList.add("active");
}

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

