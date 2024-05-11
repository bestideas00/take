// fixed_menu
$(window).scroll(function(){
    if($(window).scrollTop() > 200){
        $(".menu").addClass("fixed_menu")
    }else {
        $(".menu").removeClass("fixed_menu")
    }
})