var multiMenu = document.querySelector(".js-multi-item");
var subMenu = document.querySelector(".menu__submenu-list")

multiMenu.addEventListener("mouseover", function() {
  subMenu.classList.add("menu__submenu-list--active")
  multiMenu.classList.toggle("menu__list-item--active")
})
multiMenu.addEventListener("mouseout", function() {
  subMenu.classList.remove("menu__submenu-list--active")
  multiMenu.classList.toggle("menu__list-item--active")
})

//Date picker

$(function() {
  $("#departure-date").datepicker({
    dateFormat: 'dd.mm.yy'
  });
  $("#return-date").datepicker({
    dateFormat: 'dd.mm.yy'
  });
});;

//menu
// var menuBtn = document.querySelector(".menu-toggle");
// var nav = document.querySelector('.menu');
// var main = document.querySelector('.input-block')
// menuBtn.addEventListener('click', function() {
//   nav.classList.toggle('menu-responsive')
// })
// main.addEventListener('click', function() {
//   nav.classList.remove('menu-responsive')
// })

//Date input

var returnD = document.querySelector("#return-date");
var returnIcon = document.querySelector("#return-icon")
var checkbox = document.querySelector("input[type=checkbox]");

function returnDate() {
  checkbox.addEventListener("change", function() {
    returnD.classList.toggle("date-block__input--inactive")
    returnIcon.classList.toggle("date-block__icon--disabled")
    if (checkbox.checked) {
      returnD.disabled = false;
      returnIcon.style.fill = "#656565"
    } else {
      returnD.disabled = true;
      returnIcon.style.fill = "#94c4db"
    }
  })
}
returnDate();

//Change city

var input = document.querySelectorAll('.input-city__input-field')
document.querySelector('#arrows').addEventListener('click', function() {
  var val = input[0].value;
  input[0].value = input[1].value;
  input[1].value = val;
});

//Responsive menu

$(document).ready(function () {
  $('.response--main-navigation').basicResponsiveMenu({
    animate: true,
    browserWidth: 980,
    slideDir: 'right',
  });
});