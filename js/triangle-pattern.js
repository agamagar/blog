// function isScrolledIntoView(t){var n=$(window).scrollTop(),e=n+$(window).height(),i=$(t).offset().top-200;return i+$(t).height()<=e&&i<=n}function isScrolledIntoView1(t){var n=$(window).scrollTop(),e=n+$(window).height(),i=$(t).offset().top-1200;return i+$(t).height()<=e&&i<=n}function isScrolledIntoView2(t){var n=$(window).scrollTop(),e=n+$(window).height(),i=$(t).offset().top-3700;return i+$(t).height()<=e&&i<=n}$(window).on("scroll",function(){$(".js-triangle-pattern").each(function(){isScrolledIntoView(".js-triangle-pattern")&&$(this).find("svg.triangle-shape").find(".triangle").addClass("active")}),$(".js-triangle-pattern1").each(function(){isScrolledIntoView(".js-triangle-pattern1")&&$(".js-triangle-pattern1").find(".triangle").addClass("active")}),$(".js-triangle-pattern2").each(function(){isScrolledIntoView(".js-triangle-pattern2")&&$(this).find("svg.triangle-shape").find(".triangle").addClass("active")}),$(".js-triangle-pattern3").each(function(){isScrolledIntoView(".js-triangle-pattern3")&&$(this).find("svg.triangle-shape").find(".triangle").addClass("active")}),$(".js-triangle-pattern4").each(function(){isScrolledIntoView1(".js-triangle-pattern4")&&$(this).find("svg.triangle-shape").find(".triangle").addClass("active")}),$(".js-triangle-pattern5").each(function(){isScrolledIntoView(".js-triangle-pattern5")&&setTimeout(function(){$(".js-triangle-pattern5").find("svg.triangle-shape").find(".triangle").addClass("active")},900)}),$(".js-triangle-pattern6").each(function(){isScrolledIntoView2(".js-triangle-pattern6")&&$(this).find("svg.triangle-shape").find(".triangle").addClass("active")}),$(".js-triangle-pattern9").each(function(){isScrolledIntoView(".js-triangle-pattern9")&&setTimeout(function(){$(".js-triangle-pattern9").find("svg.triangle-shape").find(".triangle").addClass("active")},600)}),$(".js-triangle-pattern11").each(function(){isScrolledIntoView1(".js-triangle-pattern11")&&setTimeout(function(){$(".js-triangle-pattern11").find("svg.triangle-shape").find(".triangle").addClass("active")},600)})});


function isScrolledIntoView(t) {
    var n = $(window).scrollTop(),
        e = n + $(window).height(),
        i = $(t).offset().top - 200;
    return i + $(t).height() <= e && i <= n
}

function isScrolledIntoView1(t) {
    var n = $(window).scrollTop(),
        e = n + $(window).height(),
        i = $(t).offset().top - 1200;
    return i + $(t).height() <= e && i <= n
}

function isScrolledIntoView2(t) {
    var n = $(window).scrollTop(),
        e = n + $(window).height(),
        i = $(t).offset().top - 3700;
    return i + $(t).height() <= e && i <= n
}
$(window).on("scroll", function() {
    $(".js-triangle-pattern").each(function() {
        isScrolledIntoView(".js-triangle-pattern") && $(this).find("svg.triangle-shape").find(".triangle").addClass("active")
    }), $(".js-triangle-pattern1").each(function() {
        isScrolledIntoView(".js-triangle-pattern1") && $(".js-triangle-pattern1").find(".triangle").addClass("active")
    }), $(".js-triangle-pattern2").each(function() {
        isScrolledIntoView(".js-triangle-pattern2") && $(this).find("svg.triangle-shape").find(".triangle").addClass("active")
    }), $(".js-triangle-pattern3").each(function() {
        isScrolledIntoView(".js-triangle-pattern3") && $(this).find("svg.triangle-shape").find(".triangle").addClass("active")
    }), $(".js-triangle-pattern4").each(function() {
        isScrolledIntoView1(".js-triangle-pattern4") && $(this).find("svg.triangle-shape").find(".triangle").addClass("active")
    }), $(".js-triangle-pattern5").each(function() {
        isScrolledIntoView(".js-triangle-pattern5") && setTimeout(function() {
            $(".js-triangle-pattern5").find("svg.triangle-shape").find(".triangle").addClass("active")
        }, 900)
    }), $(".js-triangle-pattern6").each(function() {
        isScrolledIntoView2(".js-triangle-pattern6") && $(this).find("svg.triangle-shape").find(".triangle").addClass("active")
    }), $(".js-triangle-pattern9").each(function() {
        isScrolledIntoView(".js-triangle-pattern9") && setTimeout(function() {
            $(".js-triangle-pattern9").find("svg.triangle-shape").find(".triangle").addClass("active")
        }, 600)
    }), 
    $(".js-triangle-pattern12").each(function() {
        isScrolledIntoView(".js-triangle-pattern12") && setTimeout(function() {
            $(".js-triangle-pattern12").find("svg.triangle-shape").find(".triangle").addClass("active")
        }, 600)
        
    })
});