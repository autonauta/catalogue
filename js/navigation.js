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
      console.log("seguridad");

      break;
    case "vigilancia":
      console.log("vigilancia");

      break;
    case "conectividad":
      console.log("conectividad");

      break;
    case "videoportero":
      console.log("videoportero");

      break;
    case "musica":
      console.log("musica");

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
          }, 600);
        }, 400);
      }, 300);

      break;
    default:
      break;
  }
};
