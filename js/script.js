
$(document).ready(main);

	 function main(){
	 		scrollStyle();
	 		tecnologias();
	  
	}


/*
Se agrega una funcion para mejorar el estilo del scrolling.
*/
function scrollStyle(){
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 45 //to fix header margin size 
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}


function tecnologias(){
var place = $("#tecnologias");

 
var imagenes = ["html","css","bootstrap","javascript","jquery","typescript","react","php","sql","csharp","nodejs","Git"];
var descripciones  =["HyperText Markup Language", "Cascading Style Sheets","The most popular HTML, CSS, and JavaScript framework for developing responsive", "ECMAScrip2015","The Write Less, Do More, JavaScript Library.","optional static type-checking along with the latest ECMAScript features","React is a JavaScript library for building user interfaces.",
					"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.","Structured Query Language","C# o C Sharp es un lenguaje de programación que está incluido en la Plataforma .NET","Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor","software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente."];
var tecnologias = " ";
for(var i = 0, x = imagenes.length ; i < x ; i++){
	tecnologias += '<article class="col-xs-4 col-sm-3 col-md-3 col-lg-3">'
					+						'<div class="thumbnail">'
					+		'<img class="img-thumbnail img-responsive " src="img/' + imagenes[i]  + '.png" alt="' +descripciones[i]+'" title="'+imagenes[i]+'"></img> '
					+					'</article>';	
}

place.append(tecnologias);
}