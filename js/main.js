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


function iniciar(){

	var z = $('#infra');
	z.click(cuarto);

	var y = $('#volver_quienes')
	y.click(quinto);

	var a = $('#ir')
	a.click(primero);

	var b = $('#logosena')
	a.click(segundo);
}

function quinto(){
	$('#contenido').show().animateCss('zoomIn');
	$('#contenido').html('<h1 class=" text-center"> Historia</h1><div class="container"><div class="well"><br><p class=" text-justify "> El SENA nació duran<t></t>e el gobierno de la Junta Militar, posterior a la renuncia del General Gustavo Rojas Pinilla, mediante el Decreto-Ley 118, del 21 de junio de 1957.  Su función, definida en el Decreto 164 del 6 de agosto de 1957, fue brindar formación profesional a trabajadores, jóvenes y adultos de la industria, el comercio, el campo, la minería y la ganadería. Su creador fue Rodolfo Martínez Tono. Así mismo, siempre buscó proporcionar instrucción técnica al empleado, formación complementaria para adultos y ayudarles a los empleadores y trabajadores a establecer un sistema nacional de aprendizaje. La Entidad tiene una estructura tripartita, en la cual participarían trabajadores, empleadores y Gobierno, se llamó Servicio Nacional de Aprendizaje (SENA), que se conserva en la actualidad y que muchos años después, busca seguir conquistando nuevos mercados, suplir a las empresas de mano calificada utilizando para ello métodos modernos y lograr un cambio de paradigma en cada uno de los procesos de la productividad..</p> </div><hr><h1 class= "text-center"> Misión y Visión </h1><hr><div id="myCarousel" class="carousel slide" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li> <li data-target="#myCarousel" data-slide-to="3"></li> </ol><!-- Wrapper for slides --><center><div class="carousel-inner" role="listbox"><div class="item active"> <img src="img/1.jpeg" alt="Flower" width="500" height="00"></div> <div class="item" ><img src="img/2.jpg" alt="Flower" width="500" height="500"> </div></div> <!-- Left and right controls --><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Anterior</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Siguiente</span></a></div></center><hr><btr><br><center><img src="img/3.png" class="img-responsive hola"/><br><br><hr><img src="img/4.jpg" class="img-responsive hola"/><br><br><hr><img src="img/5.jpg" class="img-responsive hola"/></center>');
	$('#logo').hide();
}

function segundo(){

	$('#logo').show();
}

function primero(){
	$('#contenido').hide();
	$('#quienes').animateCss('zoomIn');
	$('#quienes').html('<center><img src="img/logosena.jpg" class="img-responsive hola" href="quienes.html"/></center><h1 class="text-center"><b>CENTRO DE FORMACIÓN EN DISEÑO,CONFECCIÓN Y MODA</b></h1> ');
}

function cuarto(){
	$('#contenido').show().animateCss('rotateInUpLeft');
	$('#contenido').html('<div class="container"><div class="row"><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/1.jpg" alt="" class="img-responsive nada"  height="300px"></div ><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/2.jpg" alt="" class="img-responsive nada"></div><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/3.jpg" alt="" class="img-responsive nada"></div><div class="col-md-3 col-xs-12 col-sm-6"><img src="img/Infra/4.jpg" alt="" class="img-responsive nada"></div></div></div>');
	$('#logo').hide();
}
