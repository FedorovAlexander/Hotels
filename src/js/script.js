function multiMenu() {
  var multiMenu = document.querySelector(".js-multi-item");
  var subMenu = document.querySelector(".menu__submenu-list")

  multiMenu.addEventListener("mouseover", function () {
    subMenu.classList.add("menu__submenu-list--active")
    multiMenu.classList.toggle("menu__list-item--active")
  })
  multiMenu.addEventListener("mouseout", function () {
    subMenu.classList.remove("menu__submenu-list--active")
    multiMenu.classList.toggle("menu__list-item--active")
  })
}

//Date picker

$(function () {
  $("#departure-date").datepicker({
    dateFormat: 'dd.mm.yy'
  });
  $("#return-date").datepicker({
    dateFormat: 'dd.mm.yy'
  });
});;

//Date input

function returnDate() {
  var returnD = document.querySelector("#return-date");
  var returnIcon = document.querySelector("#return-icon")
  var checkbox = document.querySelector("input[type=checkbox]");
  checkbox.addEventListener("change", function () {
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

//arrows 


//Change city
function changeCity() {
  var input = document.querySelectorAll('.input-city__input-field')
  document.querySelector('#arrows').addEventListener('click', function () {
    var val = input[0].value;
    input[0].value = input[1].value;
    input[1].value = val;
  });
}
changeCity();

//Responsive menu

$(document).ready(function () {
  $('.response--main-navigation').basicResponsiveMenu({
    animate: true,
    browserWidth: 1080,
    slideDir: 'right',
  });
});

//Arrows hover

function arrowsHover() {
  var arrows = document.querySelector('.input-city__arrows')
  var arrow1 = arrows.querySelector('.input-city__arrows--right');
  var arrow2 = arrows.querySelector('.input-city__arrows--left');
  arrows.addEventListener("mouseover", function () {
    arrow1.style.left = '5px';
    arrow2.style.left = '10px';
  })
  arrows.addEventListener("mouseout", function () {
    arrow1.style.left = '10px';
    arrow2.style.left = '5px';
  })
}

arrowsHover();