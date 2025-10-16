const burger = document.querySelector('.burger');
const burger_menu_list = document.querySelector('.burger_menu_list');
const burger_line_first = document.querySelector('.burger_line_first');
const burger_line_second = document.querySelector('.burger_line_second');
const burger_line_third = document.querySelector('.burger_line_third');
const burgerMenuLinks= document.querySelectorAll('.burger_menu_link');
const invisible_wrapped = document.querySelector('.invisible_wrapped');
burgerMenuLinks.forEach((el) => { el.addEventListener("click", toggleMenu); });

function toggleMenu() {
    burger_menu_list.classList.toggle('open');
    burger.classList.toggle('open');
    burger_line_first.classList.toggle('translate1');
    burger_line_second.classList.toggle('translate2');
    burger_line_third.classList.toggle('translate3');
    invisible_wrapped.classList.toggle('wrapped');
}
burger.addEventListener('click', toggleMenu);
invisible_wrapped.addEventListener("click", toggleMenu);
