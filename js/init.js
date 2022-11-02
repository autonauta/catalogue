var localLogo = $(".local-logo");
var logo = $(".logo");
var lineContainerHorizontal = $(".line-container--1");
var lineContainerVertical = $(".line-container--2");
var headerServicios = $(".header__servicios");

setTimeout(() => {
  localLogo.addClass("show");
  setTimeout(() => {
    localLogo.removeClass("show");
    setTimeout(() => {
      logo.addClass("show");
      localLogo.addClass("translated");
      setTimeout(() => {
        localLogo.addClass("show");
        setTimeout(() => {
          lineContainerHorizontal.addClass("underlined");
          lineContainerVertical.addClass("underlined");
          setTimeout(() => {
            headerServicios.addClass("show");
          }, 200);
        }, 300);
      }, 500);
    }, 300);
  }, 1000);
}, 1000);

setT;
