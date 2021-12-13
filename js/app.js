const swiper = new Swiper('.slider-photo', {
    spaceBetween: 10,
});

const buttonAccept = document.querySelector('#button-accept');
const buttonBack = document.querySelector('#button-back');
const modal = document.querySelector('#modal');

if (buttonAccept) {
    buttonAccept.addEventListener("click", function (e) {
        modal.classList.add('__active');

    })
}
if (buttonBack) {
    buttonBack.addEventListener("click", function (e) {
        modal.classList.remove('__active');
    })
}
