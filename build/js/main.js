$(function(){let o=$(".banner__right"),t=$(".lang-wrap"),n=$(".banner__description"),i=$(".banner__letterA"),e=$(".about__letterC"),l=$(".about__picture");$(window).width()>=768&&(o.css({transform:"translateX(0)"}),t.css({transform:"translateX(0)"}),n.css({opacity:"1"}),i.css({transform:"scale(1)"}),$(window).on("scroll",function(){$(".about__inner").offset().top-$(window).scrollTop()<600&&(l.css({transform:"translateX(0)"}),e.css({transform:"scale(1)"}))}));let a=$(".main-nav--comp .main-nav__sandwich"),s=$(".main-nav--mobile .main-nav__sandwich"),c=$(".main-nav--comp"),r=$(".main-nav--mobile"),f=$(".main-nav--mobile .main-nav__list"),d=$(".main-nav__background");function p(){$("main").removeClass("blur"),f.slideUp("slow"),d.fadeOut("slow"),$(".lang-wrap").css("opacity","1"),$(".logo-wrap").css("transform","translateX(0)")}a.on("click",function(){c.toggleClass("nav-open")}),s.on("click",function(){r.toggleClass("nav-mobile-open"),r.hasClass("nav-mobile-open")?($("main").addClass("blur"),f.slideDown("slow"),d.fadeIn("slow"),$(".lang-wrap").css("opacity","0"),$(".logo-wrap").css("transform","translateX(166%)")):p()});let h=$(".main-nav--comp .main-nav__list a"),w=$(".main-nav--mobile .main-nav__list a"),_=$(window);function u(o,t,n){let i=o.attr("href"),e=$(i);if(e.length>0){let o=e.offset().top,i=_.scrollTop(),l=Math.abs(o-t-i);$("html,body").animate({scrollTop:o-t},l/n)}}h.on("click",function(o){o.preventDefault(),u($(this),50,2)}),w.on("click",function(o){o.preventDefault(),u($(this),140,5),r.removeClass("nav-mobile-open"),p()});let m=$(".portfolio__gallery-item"),b=$(".portfolio__gallery");$(".portfolio__menu").on("click",".portfolio__tab",function(o){o.preventDefault(),$(this).addClass("active"),$(".portfolio__tab").not($(this)).removeClass("active");let t=$(this).attr("data-filter");"all"==t?b.fadeOut("slow",function(){m.show(),window.screen.width<=576&&U(A,m,4),b.fadeIn()}):b.fadeOut("slow",function(){$(t).show(),m.not(t).hide(),window.screen.width<=576&&U(A,$(t),4),b.fadeIn()})});let v=$(".portfolio__gallery-back"),g=$(".portfolio__wrap");function y(o){let t=o.parent().width()/2-o.innerWidth()/2;o.css("left",`${t}px`)}if(v.each(function(){y($(this))}),$(window).width()>=992&&($(".portfolio__gallery-back:first").css("left","-33px"),$(".portfolio__gallery-back:eq(1)").css("left","-65px")),$(window).width()<=380&&(v.each(function(){$(this).innerWidth(g.width()+10),$(this).innerHeight(.71*(g.width()+10))}),v.each(function(){y($(this))})),$(".about__picture-mobile").height(.8*$(".about__picture-mobile").width()),window.screen.width<=768){let o=$(window);o.on("scroll",function(){m.each(function(){o.scrollTop()+o.height()>=$(this).offset().top+$(this).height()-80?$(this).find(".portfolio__gallery-back").css("opacity","1"):$(this).find(".portfolio__gallery-back").css("opacity","0")})})}$(window).width()<=768&&$(window).on("scroll",function(){$(window).scrollTop()>0?$(".header").css("box-shadow","0px 4px 10px rgba(0, 0, 0, 0.2)"):$(".header").css("box-shadow","none")});let k=$(".btnUp");k.on("click",function(){let o=_.scrollTop();$("html,body").animate({scrollTop:0},o/3)}),window.screen.width>=744?$(window).on("scroll",function(){let o=_.scrollTop()>300;!x&&o?(k.stop(!0).fadeIn(500),x=!0):x&&!o&&(k.stop(!0).fadeOut(500),x=!1)}):$("header .logo").on("click",function(){let o=_.scrollTop();$("html,body").animate({scrollTop:0},o/3)});let x=!1;$(".portfolio__gallery-number").each(function(o,t){++o>9?$(t).text(`${o}`):$(t).text(`0${o}`)});let T=$(".order .form__submit"),C=$(".order .form__check input"),I=$(".popup .form__submit"),O=$(".popup .form__check input");function X(o,t){o.is(":checked")?t.removeAttr("disabled"):t.attr("disabled","disabled")}C.on("click",function(){X($(this),T)}),O.on("click",function(){X($(this),I)});let D=new class{constructor(o){this.modal=$(o.modal),this.overlay=$(o.overlay),this.btn=$(o.btn),this.btn.on("click",()=>{this.close()})}open(){this.overlay.fadeIn("slow"),this.modal.fadeIn("slow")}close(){this.overlay.fadeOut("slow"),this.modal.fadeOut("slow")}}({modal:".popup .popup__content",overlay:".popup .popup__overlay",btn:".btn-close"});$(".banner__left .button").on("click",function(){D.open()});let A=$(".portfolio__show-btn");function U(o,t,n){let i=t.length;i>n?o.show():o.hide(),t.hide(),t.slice(0,n).show(),o.click(function(){let e=t.filter(":visible").length;t.slice(e-1,e+n).fadeIn(),t.filter(":visible").length>=i&&o.hide()})}window.screen.width<=576&&U(A,m,4),$("form").submit(function(){let o=$(this).attr("id"),t=$("#"+o).find(".form__reply");return $.ajax({type:"POST",url:"feedback.php",data:t.serialize(),success:function(n){$(t).html(n),$("#"+o).find(".form__submit").attr("disabled","disabled").val("Заявка отправлена")}}),!1})});