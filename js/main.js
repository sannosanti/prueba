var x = $(document);
x.ready(iniciar);

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});



function ccolor(){

}
function iniciar(){

	var a = $('#ir')
	a.click(primero);

	var z = $('#infra');
	z.click(cuarto);

	var y = $('#volver_quienes')
	y.click(quinto);

	var b = $('#progra')
	b.click(segundo);	

	var c = $('#algo')
	c.click(mostrar);

	var c = $('#noticia')
	c.click(tercero);
	
}

function quinto(){
	$('#contenido').show().animateCss('zoomIn');
	$('#contenido').html('<h1 class=" text-center"> Historia </h1> <img src = "img/colilla.jpg" class="banner"> <div class="container"><div class="well"><br><p class=" text-justify "> El SENA nació duran<t></t>e el gobierno de la Junta Militar, posterior a la renuncia del General Gustavo Rojas Pinilla, mediante el Decreto-Ley 118, del 21 de junio de 1957.  Su función, definida en el Decreto 164 del 6 de agosto de 1957, fue brindar formación profesional a trabajadores, jóvenes y adultos de la industria, el comercio, el campo, la minería y la ganadería. Su creador fue Rodolfo Martínez Tono. Así mismo, siempre buscó proporcionar instrucción técnica al empleado, formación complementaria para adultos y ayudarles a los empleadores y trabajadores a establecer un sistema nacional de aprendizaje. La Entidad tiene una estructura tripartita, en la cual participarían trabajadores, empleadores y Gobierno, se llamó Servicio Nacional de Aprendizaje (SENA), que se conserva en la actualidad y que muchos años después, busca seguir conquistando nuevos mercados, suplir a las empresas de mano calificada utilizando para ello métodos modernos y lograr un cambio de paradigma en cada uno de los procesos de la productividad..</p> </div><h1 class= "text-center"> Misión y Visión </h1><img src = "img/colilla.jpg" class="banner"><div id="myCarousel" class="carousel slide" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li> <li data-target="#myCarousel" data-slide-to="3"></li> </ol><!-- Wrapper for slides --><center><div class="carousel-inner" role="listbox"><div class="item active"> <img src="img/1.jpeg" alt="Flower" width="500" height="00"></div> <div class="item" ><img src="img/2.jpg" alt="Flower" width="500" height="500"> </div></div> <!-- Left and right controls --><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Anterior</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Siguiente</span></a></div></center><hr><btr><br><center><img src = "img/colilla.jpg" class="banner"><img src="img/3.png" class="img-responsive hola"/><br><br><img src = "img/colilla.jpg" class="banner"><img src="img/4.jpg" class="img-responsive hola"/><br><br><img src = "img/colilla.jpg" class="banner"><img src="img/5.jpg" class="img-responsive hola"/></center><br><br>');
	$('#logo').hide();
}

function primero(){
	$('#contenido').hide();	
	$('#logo').animateCss('rollIn');
	$('#logo').show();
}

function segundo(){
	$('#contenido').show().animateCss('rotateInUpLeft');
	$('#contenido').html('<h1 class=" text-center">Programas de Formación </h1><img src = "img/colilla.jpg" class="banner"><div class="container"> <div class="well"> <p class=" text-justify "><h2>Formación Titulada- Tecnologías</h2> <br> 1. Diseño para la Industria de la Moda <br> 2.Confección Industrial <br> 3. Producción de Joyería <br> 4. Análisis y Desarrollo de Sistemas de Información <br> 5. Gestión del Talento Humano <br></p></div></div><img src = "img/colilla.jpg" class="banner"><div class="container"> <div class="well"> <p class=" text-justify "><h2>Formación Titulada- Técnicas</h2> <br> 1. Diseño de Joyas <br> 2. Armado de Piezas de joyería <br> 3. Patronista Escalador en Confección Industrial <br> 4. Mecánica de Máquinas de Confección Industrial <br> 5. Trazo y Corte en Confección Industrial <br> 6. Control de Calidad en Confección <br> 7.Manejo de Maquinas de Confección Industrial para Jean <br> 8. Manejo de Máquinas de Confección Industrial para Ropa Interior y Deportiva <br> 9. Manejo de Máquinas de Confección Industrial para Ropa Exterior <br></p></div></div><img src = "img/colilla.jpg" class="banner"><div class="container" > <div class="well"> <p id= "text-Programas" class=" text-justify" ><h2>Formación Complementaria</h2> <br> 1. Auditorías de Calidad en Empresas de Confección <br> 2. Patronaje y Escalado asistido por computador <br> 3. Gestión de Calidad <br> 4. Calidad en procesos y productos de confección <br> 5. Planeación, programación y control de producción <br> 6. Corte industrial de prendas <br> 7. Primeros Auxilios en Mecánica de Máquinas en confección <br> 8. Aplicación de Métodos de trabajo <br> 9. Medición de trabajo <br> 10.Electricidad, electrónica y neumática básica <br> 11. Manejo de máquina plana <br> 12. Manejo de Máquina sobrehiladora (fileteadora) <br> 13. Confección de Ropa Exterior <br> 14. Elaboración de accesorios de bisutería <br> 15. Elaborar y transformar lingotes para fabricar joyas <br></p></div></div>');
	$('#logo').hide();
}

function tercero(){
	$('#contenido').show();
	$('#contenido').animateCss('fadeInUp');	
	$('#contenido').html('<center><img src = "img/colilla.jpg" class="banner"> <div class="container"><div class="row"><div class="col-xs-12 col-sm-6 col-lg-3"><img src="img/noticias/1.jpg" class="primera img-responsive" width="200"/><br><br><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Ver Noticias</button><div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Noticias</h4></div><div class="modal-body"><p>Lugar:Auditorio del 6to. Piso del Mobiliario Hora:8:00 a.m. a 10:00 p.m Día:miércoles 18 de mayo de 2016.</p><br><img src="img/noticias/1.jpg" class="img-responsive"/></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div><div class="col-xs-12 col-sm-6 col-lg-3"><img src="img/noticias/2.jpg" class="primera img-responsive" width="200"/><br><br><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal2">Ver Noticias</button><div id="myModal2" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Noticias</h4></div><div class="modal-body"><p>¿Quiere vender más?</p><br><img src="img/noticias/2.jpg" class="img-responsive"/></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div><div class="col-xs-12 col-sm-6 col-lg-3"><img src="img/noticias/3.jpg" class="primera img-responsive" width="200"/><br><br><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal3">Ver Noticias</button><div id="myModal3" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Noticias</h4></div><div class="modal-body"><p>Cuerpo,Cultura y contexto</p><br><img src="img/noticias/3.jpg" class="img-responsive"/></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div><div class="col-xs-12 col-sm-6 col-lg-3"><img src="img/noticias/5.png" class="primera img-responsive" width="200"/><br><br><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal4">Ver Noticias</button><div id="myModal4" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Noticias</h4></div><div class="modal-body"><p>Invitación para aprendices show gastronómico.</p><br><img src="img/noticias/5.png" class="img-responsive"/></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div></div></div></div>');
	$('#logo').hide();
}
function cuarto(){
	$('#contenido').show().animateCss('rotateInUpLeft');
	$('#contenido').html('<div i id= "tres"><center><h1><p><img src = "img/colilla.jpg" class="banner"></p></center></div><div class="container"><div class="row"><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/1.jpg" alt="" class="img-responsive nada"  height="300px"></div ><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/2.jpg" alt="" class="img-responsive nada"></div><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/3.jpg" alt="" class="img-responsive nada"></div><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/4.jpg" alt="" class="img-responsive nada"></div></div></div>');
	$('#logo').hide();
}

function mostrar(){
	$('#contenido').show().animateCss('rotateInUpLeft');
	$('#contenido').html('<h1 class=" text-center"> Historia </h1> <img src = "img/colilla.jpg" class="banner"> <div class="container"><div class="well"><br><p class=" text-justify "> El SENA nació duran<t></t>e el gobierno de la Junta Militar, posterior a la renuncia del General Gustavo Rojas Pinilla, mediante el Decreto-Ley 118, del 21 de junio de 1957.  Su función, definida en el Decreto 164 del 6 de agosto de 1957, fue brindar formación profesional a trabajadores, jóvenes y adultos de la industria, el comercio, el campo, la minería y la ganadería. Su creador fue Rodolfo Martínez Tono. Así mismo, siempre buscó proporcionar instrucción técnica al empleado, formación complementaria para adultos y ayudarles a los empleadores y trabajadores a establecer un sistema nacional de aprendizaje. La Entidad tiene una estructura tripartita, en la cual participarían trabajadores, empleadores y Gobierno, se llamó Servicio Nacional de Aprendizaje (SENA), que se conserva en la actualidad y que muchos años después, busca seguir conquistando nuevos mercados, suplir a las empresas de mano calificada utilizando para ello métodos modernos y lograr un cambio de paradigma en cada uno de los procesos de la productividad..</p> </div><h1 class= "text-center"> Misión y Visión </h1><img src = "img/colilla.jpg" class="banner"><div id="myCarousel" class="carousel slide" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li> <li data-target="#myCarousel" data-slide-to="3"></li> </ol><!-- Wrapper for slides --><center><div class="carousel-inner" role="listbox"><div class="item active"> <img src="img/1.jpeg" alt="Flower" width="500" height="00"></div> <div class="item" ><img src="img/2.jpg" alt="Flower" width="500" height="500"> </div></div> <!-- Left and right controls --><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Anterior</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Siguiente</span></a></div></center><hr><btr><br><center><img src = "img/colilla.jpg" class="banner"><img src="img/3.png" class="img-responsive hola"/><br><br><img src = "img/colilla.jpg" class="banner"><img src="img/4.jpg" class="img-responsive hola"/><br><br><img src = "img/colilla.jpg" class="banner"><img src="img/5.jpg" class="img-responsive hola"/></center><br><br>');
	$('#logo').hide();
}

function sexto(){
	$('#logo').show();
}