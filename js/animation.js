
var Formas = document.getElementsByClassName("formas");
var Scroll = document.getElementsByClassName("scroll");
var Title = document.getElementsByClassName("title");
var Text = document.getElementsByClassName("text");
var Card = document.getElementsByClassName("servicios card");
var Logo = document.getElementsByClassName("logo");
var Logoxl = document.getElementsByClassName("logoxl");
var Target = document.getElementsByClassName("target");
var Datos = document.getElementsByClassName("datos");
var nav = document.getElementById('nav');
var mainNav = document.getElementById("main-nav");
var line = document.getElementsByClassName("line");
var Foot = document.getElementById('footer');





//SCENE ELEMENT
function inicio(){
  var xinicio = document.getElementsByClassName("inicio");
  var i;
  for (i = 0; i < xinicio.length; i++) {
    xinicio[i].style.transform = "translateX(0%)"
  }
};

function servicios(){
  var xservicios = document.getElementsByClassName("servicios");
  var i;
  Title[1].innerHTML ="Estos son nuestros Servicios";
  Text[1].innerHTML = "Nos sumergimos en tus proyectos para conocer plenamente tus retos. Luego, propondremos nuevos modelos para lograr los mejores resultados esperados. Únete a la transformación digital.";
  for (i = 0; i < xservicios.length; i++) {
    xservicios[i].style.transform = "translateX(0%)"
  }
};

function asdata(){
  var asdata = document.getElementById("content_asdata");
  asdata.style.transform ="translateX(0%)"
};

function asdataOut(){
  var asdata = document.getElementById("content_asdata");
  asdata.style.transform ="translateY(105%)"
};

function contacto(){
  var xcontacto = document.getElementsByClassName("contacto");
  var i;

  for (i = 0; i < xcontacto.length; i++) {
    xcontacto[i].style.transform = "translateX(0%)"
  }
};


//ANIMATE CSS TEXTO
const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    Text[1].classList.add(`${prefix}animated`, animationName);
    Title[1].classList.add(`${prefix}animated`, animationName);


    function handleAnimationEnd(event) {
      event.stopPropagation();
      Text[1].classList.remove(`${prefix}animated`, animationName);
      Title[1].classList.remove(`${prefix}animated`, animationName);

      resolve('Animation ended');
    }

    Text[1].addEventListener('animationend', handleAnimationEnd, {once: true});
    Title[1].addEventListener('animationend', handleAnimationEnd, {once: true});

  });


//SERVICE CONTENT

function None() {
  for (var i = 0; i < Target.length; i++) {
    Target[i].style.border="";
  };

};





function cambio (boton){
  switch (boton)
  {
    case "app":
      animateCSS(Text[1], 'fadeIn');
      animateCSS(Title[1], 'fadeIn');
      None();
      Target[0].style.border="1px solid #fff";
      Title[1].innerHTML= "Software a medida";
      Text[1].innerHTML = "Creamos soluciones integrales. Gestiona tus contactos, rastrea el inventario, organiza proyectos, crea presupuestos, gobierna tu empresa con aplicaciones personalizadas.";
      break;
    case "web":
      animateCSS(Text[1], 'fadeIn');
      animateCSS(Title[1], 'fadeIn');
      None();
      Target[1].style.border="1px solid #fff";
      Title[1].innerHTML= "Proyectos web optimizados";
      Text[1].innerHTML = "Diseñamos y desarrollamos tu sitio web. Ya sea un microsite, una aplicación web o una tienda e-commerse, estará totalmente adaptada a tus necesidades.";
      break;
    case "inte":
      animateCSS(Text[1], 'fadeIn');
      animateCSS(Title[1], 'fadeIn');
      None();
      Target[2].style.border="1px solid #fff";
      Title[1].innerHTML= "Herramientas digitales";
      Text[1].innerHTML = "Un sin fin de apps y servicios webs. Con nuestras herramientas y nuestros servicios, ayudaremos a tu empresa a liderar su sector. Incorpórate a la revolución digital.";
      break;
    case "consu":
      animateCSS(Text[1], 'fadeIn');
      animateCSS(Title[1], 'fadeIn');
      None();
      Target[3].style.border="1px solid #fff";
      Title[1].innerHTML= "Consultoría tecnológica";
      Text[1].innerHTML = "Nos fascina el mundo digital, por eso estamos en constante formación. Estamos preparados para asesorate y evaluar el rendimiento tecnológico de tu proyecto.";
      break;
  }
};


//NAVBAR

function sectionMenu(){
  navbar.style.height="0%";
  line[0].style.transform="rotate(0deg) translate(0px,0px)";
  line[1].style.transform="rotate(0deg) translate(0px,0px)";

};

// NAVEGATION


nav.addEventListener("click", function(){
  nav.classList.toggle('mostrar');
  if (navbar.style.height=="100%"){
    navbar.style.height="0%";
    line[0].style.transform="rotate(0deg) translate(0px,0px)";
    line[1].style.transform="rotate(0deg) translate(0px,0px)";

  }
  else{
   navbar.style.height="100%";
   line[0].style.transform="rotate(45deg) translate(0px,6px)";
   line[1].style.transform="rotate(-45deg) translate(0px, -5px)";


  };

});
