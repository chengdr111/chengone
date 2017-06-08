/**
 * Created by Administrator on 2017/4/1.
 */

$(document).ready(function(){
    $(".head_center > li >a").each(function(){
        $this = $(this);
        if(this.href==window.location.href){
            $this.addClass("hoverli");
        }else{
        }
    });
});

// $(document).ready(function(){
    $(".apply_main .app_item:lt(8)").css("display","block");

    $('.more').click(function () {
        if($(".apply_main .app_item:gt(7)").css("display")=="none"){
            $(".apply_main .app_item:gt(7)").slideDown();
            $(this).html("关闭更多应用");
        }else{
            $(".apply_main .app_item:gt(7)").slideUp();
            $(this).html("查看更多应用");
        }
    });

// });

// 吸顶
//
$(window).scroll(function(){
    var _top = $(window).scrollTop();//滚动条高度
    var navw = $('.header').height();
    if(_top>navw){
        $('.header').addClass("navbar-fixed-top");
    }else if(_top<100){
        $('.header').removeClass("navbar-fixed-top");
    }
});


$(function () {
    $(window).scroll(function () {

        $('.main_ul').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            // console.log(stop);
            if (h_3 < stop+800) {
                $(".main_ul").addClass('a-fadeinB delay06');
            }
        });

        $('.main_d2').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            // console.log(stop);
            if (h_3 < stop+800) {
                $(".main_d2").addClass('a-fadeinB delay06');
            }
        });

        $('.function_c').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            // console.log(stop);
            if (h_3 < stop+700) {
                $(".function_c").addClass('a-fadeinB delay06');
            }
        });

        $('.apply_main').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            if (h_3 < stop+700) {
                $(".apply_main").addClass('a-fadeinB  delay06');
            }
        });

        $('.goodness').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            if (h_3 < stop+700) {
                $(".goodness").addClass('a-fadeinB delay06');
            }
        });

        $('.modular_eight').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            if (h_3 < stop+700) {
                $(".modular_eight").addClass('a-fadeinB delay06');
            }
        });

        $('.reitemleft').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            if (h_3 < stop+800) {
                $(".reitemleft").addClass('a-fadeinB delay06');
            }
        });

        $('.reitemrig').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            if (h_3 < stop+800) {
                $(".reitemrig").addClass('a-fadeinB delay06');
            }
        });

        $('.result img').each(function () {
            var h_3 = $(this).offset().top;
            var stop =  $(window).scrollTop();
            if (h_3 < stop+800) {
                $(".result img").addClass('a-fadeinB delay06');
            }
        });
    });
});
$(function () {
    $(".tel-kf-share-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $(".tel-kf-share-top").fadeIn(500);
            }
            else {
                $(".tel-kf-share-top").fadeOut(500);
            }
        });
        $(".tel-kf-share-top .top").click(function () {
            $('body,html').animate({scrollTop: 0}, 250);
            return false;
        });
    });
    $('.tel-kf-share-top > ul .item').hover(function () {
        $(this).addClass('current');
        var text_width = $(this).children().children('.text').width();
        // alert(aa);
        $(this).children().children('.text').stop().animate({left:"-"+(text_width+20)+"px"});
    },function () {
        $(this).removeClass('current');
        $(this).children().children('.text').stop().animate({left:"0px"});
    });

});
$(function () {


    $('.apply_main > div ').mouseenter(function () {
       // alert('111');
        $(this).addClass('item-open');

    });

    $('.apply_main > div').mouseleave(function () {
        $(this).removeClass('item-open');
    });

    
    
    $('.goodness .goodness_item').mouseenter(function (){
        var good_img = 'images/'+'good'+$(this).index()+'.png';
        $(this).children('img').attr('src',good_img).siblings('h3').css('color','#3698D9');
    });
    $('.goodness .goodness_item').mouseleave(function (){
        var go_img = 'images/'+'go'+$(this).index()+'.png';
        $(this).children('img').attr('src',go_img).siblings('h3').css('color','#505050');
    });

});

$(function(){
    $('.function_bottom .fun2_text').hover(function () {
        $(this).parent('.function_item_bt').toggleClass('function_itb');
    });


    $(".applied_item_main .applied_item").each(function(){
        var app_index = $(this).index();
        $(this).children('p').css('background-position',"0  "+ (-88*app_index) + "px");
    });


    $(".case_left ul li").each(function(){
        var lin = $(this).index();
        $(this).children('i').css('background-position',"0  "+ (-16*lin) + "px");
    });

    $(".case_right > div:first-child").show();

    $(".case_left ul li").hover(function(){
        var hin = $(this).index();
        $(this).addClass("txthover").siblings().removeClass("txthover");
        $(this).children('i').css('background-position',"0  "+ (-16*hin) + "px");
        // var index=$(this).index();
        $(".case_right > div").eq($(this).index()).show().siblings().stop().hide();
    });


    $(".service_text > div:first-child").show();

    $(".service_left .service_ul li").hover(function(){
        $(this).addClass("service_li_on").siblings().removeClass("service_li_on");
        $(".service_text > div").eq($(this).index()).show(100).siblings().stop().hide(100);
    });


    $(".eight_hover li").hover(function() {
        H1 = $(this).find("span").height();
        $(this).find("span img").css("margin-top","-"+H1+'px');
        $(this).find("p").css("color","#3698D9");
    },function(){
        $(this).find("span img").css("margin-top","0px");
        $(this).find("p").css("color","#505050");
    });
    $(".eight_hover1 li").hover(function() {
        H2 = $(this).find("span").width();
        $(this).find("span img").css("margin-top","-"+H2+'px');
        $(this).find("p").css("color","#3698D9");
    },function(){
        $(this).find("span img").css("margin-top","0px");
        $(this).find("p").css("color","#505050");
    });
});









