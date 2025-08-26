
//Navbar toggle
function mobileshownav() {
    $(".nav-toggle-wrapper").addClass("nav-mob-display-n");
    $("#mask").addClass("d-block")
}
function mobileremovenav() {
    $(".nav-toggle-wrapper").removeClass("nav-mob-display-n");
    $("#mask").removeClass("d-block")
}

//Slider
var swiper = new Swiper("#amenities", {

    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});



