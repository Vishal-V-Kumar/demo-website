/*var show_menu = document.querySelector('.show_menu_btn');
show_menu.addEventListener('click', function (event) {
    var target = document.querySelector(show_menu.getAttribute('data-target'));
    if (target.style.display == "none") {
        target.style.display = "block";
        show_menu.innerHTML = show_menu.getAttribute('data-shown-text');
    } else {
        target.style.display = "none";
        show_menu.innerHTML = show_menu.getAttribute('data-hidden-text');
    }
});*/



$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
