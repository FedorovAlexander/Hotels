var multiMenu = document.querySelector(".js-multi-item");
var subMenu = document.querySelector(".menu__submenu-list")

console.log(multiMenu)
multiMenu.addEventListener("mouseover", function() {
  subMenu.classList.add("menu__submenu-list--active")
  multiMenu.classList.toggle("menu__list-item--active")
})
multiMenu.addEventListener("mouseout", function() {
  subMenu.classList.remove("menu__submenu-list--active")
  multiMenu.classList.toggle("menu__list-item--active")
})


//Date picker

$( function() {
    $( "#departure-date" ).datepicker({ dateFormat: 'dd.mm.yy' });
    $( "#return-date" ).datepicker({ dateFormat: 'dd.mm.yy' });
  } );;

//Date input

  var returnD = document.querySelector(".js-return");
  var returnIcon = document.querySelector("#return-icon")
  var checkbox = document.querySelector("input[type=checkbox]");
  console.log(checkbox)
  function returnDate() {
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

  //Change city

  var arrows = document.querySelector(".input-city__arrows")
  var cityFrom =document.querySelector(".input-city__input-field--departure")
  var cityTo =document.querySelector(".input-city__input-field--arrival")
  arrows.addEventListener("click", function() {


  })
