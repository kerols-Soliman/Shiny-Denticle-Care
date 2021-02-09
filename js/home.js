$(function(){


    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $(window).scroll(function(){
        //console.log($(window).scrollTop()  +"   "+$(".ask_back").offset().top +"  "+$(".dental_services").offset().top);
        var scroll_top=$(window).scrollTop();
        if(scroll_top >= $(".carousel").offset().top+100){
            $(".chosimg-div").animate({"top":"0px"},2000)
        }  
        
        
        if(scroll_top>= $(".ask_back").offset().top-200  && scroll_top<= $(".ask_back").offset().top+outerHeight){
            $(".nav-item").removeClass("active");
            $(".nav-item:eq(1)").addClass("active");
            $(".service-div").animate({"left":"0px","top":"0px"},2000);
        }else if(scroll_top >= $("#dental_services").offset().top && scroll_top <= $("#dental_services").offset().top+outerHeight){
           $(".nav-item").removeClass("active");
           $(".nav-item:eq(2)").addClass("active");
            $(".feature-div").animate({"bottom":"0px"},2000);
            
        }else if(scroll_top >= $("#our-doctors").offset().top-80 && scroll_top <= $("#our-doctors").offset().top+outerHeight){
           $(".nav-item").removeClass("active");
           $(".nav-item:eq(3)").addClass("active");
            
        }else{
           $(".nav-item").removeClass("active");
           $(".nav-item:eq(0)").addClass("active");
        }
        
        if(scroll_top >= $("#our-doctors").offset().top-300 ){
            $(".ourdoc-div").animate({"left":"0px","right":"0px"},2000);
            
        }
 
    });
    
  

    $(".service-div").click(function(){
        $(".service-detial").css({"display":"block"});
        var ch1=$(this).children().eq(0);
        var ch2=$(this).children().eq(1);
        var ch3=$(this).children().eq(2);
        $(".service-detial .detial-img").attr("src",ch1.attr("src"));
        $(".service-detial h4").text(ch2.text());
        $(".service-detial .p1").text(ch3.text());
    });

    $(".service-detial-exit").click(function(){
        $(".service-detial").css({"display":"none"});
    });

});



