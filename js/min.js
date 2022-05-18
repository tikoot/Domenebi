jQuery(document).ready(function(){   

    $("#menu").click(function() {
        $(this).toggleClass('fa-times');
        $('.lower_header').toggleClass('menu_list');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
       $('.lower_header').removeClass('menu_list');
    });
    
    $(".link").on("click", function() { 
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
        
    });


    $(".sort_filter_btn").click(function(){
        $(".filter_wrap").addClass("filter_wrap_sort")
    });

    $(".sort_filter_header_btn").click(function(){
        $(".filter_wrap").removeClass("filter_wrap_sort")
    });

    $(".sort_filter_btn_sorting").click(function(){
        $('.sort_filter').addClass('sort_filter_window');
    });

    $(".sort_filter_header_btn_two").click(function(){
        $(".sort_filter").removeClass("sort_filter_window")
    });


});