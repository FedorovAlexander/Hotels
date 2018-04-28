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



$( function() {
    $( "#departure-date" ).datepicker({ dateFormat: 'dd.mm.yy' });
  } );;
