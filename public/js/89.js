$(document).ready(function() {
    $(".bx_show_lang").click(function() {
        $(".hd_ctn_lang").toggleClass("active");
        $(".bx_select_lang").slideToggle("fast")
    });
    $("#hd_search_form,#hd_search_form_mb").submit(function(e) {
        e.preventDefault();
        if ($(this).find(".hd_inp_search").val().trim() == "") {
            var t = "กรุณาป้อนข้อมูลคำที่จะค้นหา";
            if (LANG == "eng") {
                t = "Please input keyword to search"
            }
            ;alert(t)
        } else {
            var n = $(this).find(".hd_inp_search").val();
            location.href = BASE_LANG + "search/" + n
        }
    });
    $(".btn_mobile_search").click(function() {
        $(this).toggleClass("active");
        $("#main_search_mobile").slideToggle("fast")
    });
    $(".hd_ctn_menu").click(function() {
        closeSearch();
        $("#main_menu").stop();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".hd_show_search").hide()
        } else {
            $(".hd_show_search").show()
        }
        ;$("#main_menu").slideToggle().toggleClass("active");
        setBodyMenuActive()
    });
    $("#main_menu .list_menu a").bind("touchstart mouseenter", function(e) {
        $(this).addClass("hover_effect")
    });
    $("#main_menu .list_menu a").bind("touchend mouseleave", function(e) {
        $(this).removeClass("hover_effect")
    });
    setSizeLeftMenu();
    $(window).resize(function() {
        setSizeLeftMenu()
    });
    $(".hd_inp_search").placeholder()
});
var placeholder;
placeholder = $.fn.placeholder = function(e) {
    return !1
}
;
function gotoPageChina() {
    window.open("http://namulifechina.com/home", "_blank")
}
;function closeSearch() {
    if ($(".btn_mobile_search").hasClass("active")) {
        $(".btn_mobile_search").removeClass("active");
        $("#main_search_mobile").hide()
    }
}
;function setBodyMenuActive() {
    if ($("#main_menu").hasClass("active")) {
        var e = $(window).height()
          , t = 57
          , i = e - t
          , n = $("#main_menu ul").height();
        if ((n + t) > e) {
            $("body").addClass("menu_active")
        } else {
            $("body").removeClass("menu_active")
        }
    } else {
        $("body").removeClass("menu_active")
    }
}
;function setSizeLeftMenu() {
    if ($(window).width() < 768) {
        var e = $(window).height()
          , t = 57
          , i = e - t
          , n = $("#main_menu ul").height();
        if ((n + t) > e) {
            $("#main_menu").height(i);
            $("#main_menu").css("overflow-y", "scroll");
            setBodyMenuActive()
        } else {
            $("#main_menu").css("height", "auto");
            $("#main_menu").css("overflow-y", "auto");
            setBodyMenuActive()
        }
    } else {
        $("body").removeClass("menu_active");
        $("#main_menu").attr("style", "");
        $(".hd_ctn_menu").removeClass("active");
        $("#main_search_mobile").hide();
        $("#hd_inp_search").val("")
    }
}
;function popupQr(e) {
    if ($("#bx_pu_qr").size() == 0) {
        var t = "";
        t += "<div id=\"bx_pu_qr\" class=\"bx_popup fade in\">";
        t += "<div class=\"bx_pup_dialog\">";
        t += "<div class=\"bx_pup_content pu_qr\">";
        t += "<button type=\"button\" class=\"close\" >×</button>";
        t += "<div class=\"bx_ct_qr\"><img class=\"img_qr\" src=\"" + BASE_URL + "images/layout/img_qr.jpg\" alt=\"qr code\"/><div class=\"tt_qr\"><p class=\"p1\">Add LINE Friends via QR Codes</p><p class=\"p2\"><span class=\"line_hrz_txt\"></span>or<span class=\"line_hrz_txt\"></span></p><p class=\"p3\">Line id: <span>NAMULIFE2</span></p></div></div>";
        t += "</div>";
        t += "</div>";
        t += "</div>";
        t += "<div class=\"bx_popup_shield pu_qr\"></div>";
        $("body").append(t);
        $("#bx_pu_qr .close").click(function() {
            $("#bx_pu_qr").hide();
            $(".bx_popup_shield.pu_qr").hide();
            $("body").removeClass("dialog_show")
        })
    }
    ;if (e == "show") {
        $("body").addClass("dialog_show");
        $(".bx_popup_shield.pu_qr").show();
        $("#bx_pu_qr").show()
    } else {
        $("#bx_pu_qr").hide();
        $(".bx_popup_shield.pu_qr").hide();
        $("body").removeClass("dialog_show")
    }
}
;function DetectMobile() {
    var e = !1;
    if (navigator.userAgent.match(/iPad/i)) {
        e = !0;
        actionPc = !0
    }
    ;if (navigator.userAgent.match(/(iPod|iPhone)/)) {
        e = !0;
        actionPc = !1
    }
    ;if (navigator.userAgent.match(/Android/i)) {
        e = !0;
        actionPc = !1
    }
    ;if (navigator.userAgent.match(/BlackBerry/i)) {
        e = !0;
        actionPc = !1
    }
    ;if (navigator.userAgent.match(/webOS/i)) {
        e = !0;
        actionPc = !1
    }
    ;return e
}
;function fbs_click() {
    u = location.href;
    t = document.title;
    window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t), "sharer", "toolbar=0,status=0,width=626,height=436");
    return !1
}
;function ls_click() {
    u = location.href;
    t = document.title;
    window.open("http://line.me/R/msg/text/?" + encodeURIComponent(u), "sharer", "toolbar=0,status=0,width=626,height=436");
    return !1
}
;function popup(e, t, n, i) {
    myleft = (screen.width) ? (screen.width - n) / 2 : 100;
    mytop = (screen.height) ? (screen.height - i) / 2 : 100;
    properties = "width=" + n + ",height=" + i;
    properties += ",scrollbars=yes, top=" + mytop + ",left=" + myleft;
    window.open(e, t, properties)
}
;