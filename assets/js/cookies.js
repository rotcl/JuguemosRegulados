
$('body').cookieDisclaimer();

$('body').cookieDisclaimer({
  // bar,modal
  layout: "bar", 

  // top,middle,bottom
  position: "top", 

  // dark,light
  style: "dark", 

  // this is the modal title (not used on layout "bar")
  title: "Politica de cookies", 

  // "bar" and "modal" text
  text: "Este sitio web utiliza cookies, presione Aceptar para continuar.", 

  //fixed,absolute,relative
  cssPosition: "fixed", 
  onAccepted: "",
  
  // accept button options
  acceptBtn: {
    text: "Acepto", // accept btn text
    cssClass: "cdbtn cookie", // accept btn class
    cssId: "cookieAcceptBtn", // univocal accept btn ID
    onAfter: "" // callback after accept button click
  },
  
  // policy button options
  policyBtn: {
    active: true, // this option is for activate "cookie policy page button link"
    text: "Más información", // policypage btn text
    link: "/privacidad.html", // cookie policy page URL
    linkTarget: "_blank", // policypage btn link target
    cssClass: "cdbtn privacy", // policypage btn class
    cssId: "policyPageBtn", // univocal policypage btn ID
    onClick: "" //function on click
  },

  // jQuery cookie plugin options
  cookie: {
    name: "cookieDisclaimer",
    val: "confirmed",
    path: "/",
    expire: 365
  }  
    
});
