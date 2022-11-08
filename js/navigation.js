const navigateTo = (page) => {
  switch (page) {
    case "iluminacion":
      $("#popup-iluminacion").css({ visibility: "visible", opacity: "1" });
      $("body").css({ "overflow-y": "hidden" });
      setTimeout(() => {
        $(".section-alpha__top-line").css({ "background-size": "100% 1px" });
        setTimeout(() => {
          $(".button-close").css({ opacity: "1" });
          setTimeout(() => {
            $(".section-alpha").css({ opacity: "1" });
          }, 300);
        }, 400);
      }, 300);
      break;
    case "seguridad":
      $("#popup-seguridad").css({ visibility: "visible", opacity: "1" });
      $("body").css({ "overflow-y": "hidden" });
      setTimeout(() => {
        $(".section-alpha__top-line").css({ "background-size": "100% 1px" });
        setTimeout(() => {
          $(".button-close").css({ opacity: "1" });
          setTimeout(() => {
            $(".section-alpha").css({ opacity: "1" });
          }, 300);
        }, 400);
      }, 300);

      break;
    case "vigilancia":
      $("#popup-vigilancia").css({ visibility: "visible", opacity: "1" });
      $("body").css({ "overflow-y": "hidden" });
      setTimeout(() => {
        $(".section-alpha__top-line").css({ "background-size": "100% 1px" });
        setTimeout(() => {
          $(".button-close").css({ opacity: "1" });
          setTimeout(() => {
            $(".section-alpha").css({ opacity: "1" });
          }, 300);
        }, 400);
      }, 300);

      break;
    case "conectividad":
      $("#popup-conectividad").css({ visibility: "visible", opacity: "1" });
      $("body").css({ "overflow-y": "hidden" });
      setTimeout(() => {
        $(".section-alpha__top-line").css({ "background-size": "100% 1px" });
        setTimeout(() => {
          $(".button-close").css({ opacity: "1" });
          setTimeout(() => {
            $(".section-alpha").css({ opacity: "1" });
          }, 300);
        }, 400);
      }, 300);

      break;
    case "videoportero":
      $("#popup-videoportero").css({ visibility: "visible", opacity: "1" });
      $("body").css({ "overflow-y": "hidden" });
      setTimeout(() => {
        $(".section-alpha__top-line").css({ "background-size": "100% 1px" });
        setTimeout(() => {
          $(".button-close").css({ opacity: "1" });
          setTimeout(() => {
            $(".section-alpha").css({ opacity: "1" });
          }, 300);
        }, 400);
      }, 300);

      break;
    case "musica":
      $("#popup-musica").css({ visibility: "visible", opacity: "1" });
      $("body").css({ "overflow-y": "hidden" });
      setTimeout(() => {
        $(".section-alpha__top-line").css({ "background-size": "100% 1px" });
        setTimeout(() => {
          $(".button-close").css({ opacity: "1" });
          setTimeout(() => {
            $(".section-alpha").css({ opacity: "1" });
          }, 300);
        }, 400);
      }, 300);

      break;
    case "index":
      $(".section-alpha").css({ opacity: "0" });
      setTimeout(() => {
        $(".button-close").css({ opacity: "0" });
        setTimeout(() => {
          $(".section-alpha__top-line").css({ "background-size": "0% 1px" });
          $("body").css({ "overflow-y": "auto" });
          setTimeout(() => {
            $("#popup-iluminacion").css({ visibility: "hidden", opacity: "0" });
            $("#popup-seguridad").css({ visibility: "hidden", opacity: "0" });
            $("#popup-vigilancia").css({ visibility: "hidden", opacity: "0" });
            $("#popup-conectividad").css({ visibility: "hidden", opacity: "0" });
            $("#popup-videoportero").css({ visibility: "hidden", opacity: "0" });
            $("#popup-musica").css({ visibility: "hidden", opacity: "0" });
          }, 600);
        }, 400);
      }, 300);

      break;
      case "paquetes":
        $(".section-alpha").css({ opacity: "0" });
      setTimeout(() => {
        $(".button-close").css({ opacity: "0" });
        setTimeout(() => {
          $(".section-alpha__top-line").css({ "background-size": "0% 1px" });
          setTimeout(() => {
            $("#popup-iluminacion").css({ visibility: "hidden", opacity: "0" });
            $("#popup-seguridad").css({ visibility: "hidden", opacity: "0" });
            $("#popup-vigilancia").css({ visibility: "hidden", opacity: "0" });
            $("#popup-conectividad").css({ visibility: "hidden", opacity: "0" });
            $("#popup-videoportero").css({ visibility: "hidden", opacity: "0" });
            $("#popup-musica").css({ visibility: "hidden", opacity: "0" });
            setTimeout(() => {
              openPaquetes();
            }, 400);
          }, 600);
        }, 400);
      }, 300);
    default:
      break;
  }
};

function openPaquetes() {
  $("#popup-paquetes").css({ visibility: "visible", opacity: "1" });
  setTimeout(() => {
    $(".section-alpha__top-line").css({ "background-size": "100% 1px" });
    setTimeout(() => {
      $(".button-close").css({ opacity: "1" });
      setTimeout(() => {
        $(".section-alpha").css({ opacity: "1" });
      }, 300);
    }, 400);
  }, 300);
}
