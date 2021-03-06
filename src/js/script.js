function datePicker() {
  $(function () {
    $("#departure-date").datepicker({
      dateFormat: 'dd.mm.yy'
    });
    $("#return-date").datepicker({
      dateFormat: 'dd.mm.yy'
    });
  });
}
datePicker();

function returnDate() {
  var returnD = document.querySelector("#return-date");
  var returnIcon = document.querySelector("#return-icon");
  var checkbox = document.querySelector("input[type=checkbox]");
  checkbox.addEventListener("change", function () {
    returnD.classList.toggle("date-block__input--inactive");
    returnIcon.classList.toggle("date-block__icon--disabled");
    if (checkbox.checked) {
      returnD.disabled = false;
      returnIcon.style.fill = "#656565";
    } else {
      returnD.disabled = true;
      returnIcon.style.fill = "#94c4db";
      returnD.value = '';
    }
  });
}

returnDate();

function changeCity() {
  var input = document.querySelectorAll('.input-city__input-field');
  document.querySelector('#arrows').addEventListener('click', function () {
    var val = input[0].value;
    input[0].value = input[1].value;
    input[1].value = val;
  });
}
changeCity();

function setCity() {
  var spb = document.querySelector('.input-city__example-link--spb')
  var msc = document.querySelector('.input-city__example-link--msc')
  var arrival = document.querySelector('.input-city__item--arrival')
  var departure = document.querySelector('.input-city__item--departure')
  var departureInput = departure.querySelector('.input-city__input-field')
  var arrivalInput = arrival.querySelector('.input-city__input-field')

  arrival.querySelector('.input-city__example-link--spb').addEventListener('click', function () {
    arrivalInput.value = spb.innerText;
  })

  arrival.querySelector('.input-city__example-link--msc').addEventListener('click', function () {
    arrivalInput.value = msc.innerText;
  })

  departure.querySelector('.input-city__example-link--spb').addEventListener('click', function () {
    departureInput.value = spb.innerText;
  })

  departure.querySelector('.input-city__example-link--msc').addEventListener('click', function () {
    departureInput.value = msc.innerText;
  })
}

setCity();

//Responsive menu

$(document).ready(function () {
  $('.response--main-navigation').basicResponsiveMenu({
    animate: true,
    browserWidth: 1080,
    slideDir: 'right',
  });
});

function multiMenu() {
  var multiMenu = document.querySelector(".js-multi-item");
  var subMenu = document.querySelector(".menu__submenu-list");
  var link = multiMenu.querySelector('.menu__list-link')

  multiMenu.addEventListener("mouseover", function () {
    subMenu.classList.add("menu__submenu-list--active");
    link.classList.add("menu__list-link--active");
  });
  multiMenu.addEventListener("mouseout", function () {
    subMenu.classList.remove("menu__submenu-list--active");
    link.classList.remove("menu__list-link--active");
  });
}
multiMenu();