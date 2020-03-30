
// burger_menu
(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());
// end_burger_menu

// service_section
$(document).ready(function() {
	$('.service__sections-button').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	})
})
// service_section_end

