function Menu(e) {
	let list = document.querySelector("ul");
	let swiper = document.getElementsByClassName("swiper");
	e.name === "menu"
		? ((e.name = "close"), list.classList.add("top-[80px]"), list.classList.add("opacity-100"), list.classList.add("z-[100]"), swiper.classList.add("-z-1"))
		: ((e.name = "menu"), list.classList.remove("top-[80px]"), list.classList.remove("opacity-100"));
}
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
