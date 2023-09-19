

//FULLVIEW
$(document).ready(function () {

  inicio();
  console.log("Hola Inicio");


    var fv = $("#fullview").fullView({
        //Navigation
        navbar: "#navbar",
        dots: true,
        dotsPosition: 'left',
        dotsTooltips: false,
        speed: 600,


        //Scrolling
        backToTop: false,

        // Accessibility
        keyboardScrolling: true,

        // Callback

        onScrollEnd: function (currentView, previousView, direction) {
          var inOne = $("#section1").hasClass("active");
          var inTwo = $("#section2").hasClass("active");
          var inThree = $("#section3").hasClass("active");


          if (inOne ==true) {
            inicio();
            Title[1].style.transform = "translateX(-105%)";
            Text[1].style.transform = "translateX(-105%)";
            Card[0].style.transform = "translateX(150%)";
            asdataOut();
            console.log("Section1")
          }
          else if (inTwo ==true) {
            servicios();
            asdataOut();
            Title[1].innerHTML ="Estos son nuestros Servicios"
            Text[1].innerHTML = "Nos sumergimos en tus proyectos para conocer plenamente tus retos. Luego, propondremos nuevos modelos para lograr los mejores resultados esperados. Únete a la transformación digital.";
            console.log("Section2")

          }
          else if (inThree ==true) {

            Title[1].style.transform = "translateX(-105%)";
            Text[1].style.transform = "translateX(-105%)";
            Card[0].style.transform = "translateX(150%)";

            asdata();
            console.log("Section3")

          }
          else {
            asdataOut();
            contacto();
            Datos[0].style.transform = "translateX(0%)";
            Logo[0].style.transform = "translateY(-210%)";
            Logoxl[0].style.transform = "translateY(0)";
            Foot.style.transition = "1600ms";
            Foot.style.transform = "translateY(0)";
            console.log("Section4");

          }
        },


        onScrollStart: function (currentView, destinationView, direction) {
          var OutOne = $("#section1").hasClass("active");
          var OutTwo = $("#section2").hasClass("active");
          var OutFour = $("#section4").hasClass("active");

          if (OutOne==true) {
            Scroll[0].style.transform = "translateY(150%)";
            Text[0].style.transform = "translateX(-105%)";
            Title[0].style.transform = "translateX(-105%)";
            Formas[0].style.transform = "translateX(105%)";

          }
          else if (OutTwo==true) {
            None()

          }
          else if (OutFour==true) {
            Foot.style.transition = "200ms";
            Foot.style.transform = "translateY(120%)";
            Logo[0].style.transform = "translateY(0%)";
            Logoxl[0].style.transform = "translateY(120%)";
            Datos[0].style.transform = "translateX(-105%)";
            Text[2].style.transform = "translateX(-105%)";


          }



            console.log("Direction", direction)
            console.log("Current", currentView)
            console.log("Destination", destinationView)

        },


    });



    $("#down").click(function () {
        // To Scroll Down 1 Section
        fv.data('fullView').scrollDown();




        // To Scroll Up 1 Section
        // fv.data('fullView').scrollDown();
    });

    $("#select").change(function () {
        // To Scroll to Specfic Section
        fv.data('fullView').scrollTo($(this).val());


    });

    $("#fullview").fullView({
    	//Navigation
    	navbar:  "#navbar",
    });

});
