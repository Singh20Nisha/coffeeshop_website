const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click",()=>{
	//mobile menu visibility//
	document.body.classList.toggle("show-mobile-menu");
});
//close menu when close button is clicked //
menuCloseButton.addEventListener("click",() => menuOpenButton.click());
 //close menu when the nav link is clicked
navLinks.forEach(link => {
	link.addEventListener("click", () => menuOpenButton.click());
})

//intialize swiper
const swiper = new Swiper('.slider-wrapper',{
	loop: true,
	spaceBetween: 25,
	
	//if we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	//navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevE1: 'swiper-button-prev',
	},

	//responive breakpoints
	breakpoints: {
		0: {
			slidesPerView: 1
		},
		768: {
			slidesPerView: 2
		},
		1024: {
			slidesPerView: 3

		}
		}
});