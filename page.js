$('document').ready(function(){
    $('#myUl a').on('click', function () {
        $('#myUl > li').removeClass('active').css("background", " ").css('borderBottom', '50px');
        
        $(this).parent().css('borderBottom', '5px solid #EBE54D');
        $(this).css("color", '#08A7A0');
    }) 
});



window.addEventListener("scroll", Scroll);

function Scroll() {
    var top = document.getElementById("header");
    var page = window.pageYOffset;
    if (page > 20) {
        top.style.background = "#777";
        top.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,.15), 0 1px 5px rgba(0,0,0,.075)';
        top.style.opacity = "1";
    } else {
        top.style.background = "transparent";
        top.style.opacity = "1";
        top.style.boxShadow = 'none';
    }
}
