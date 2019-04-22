
maquina = 0;
jogador = 0;

function sleep(tempo){
    return new Promise(espera=> setTimeout(espera,tempo));
}

function escolha(x){

    if (x == 1){
        document.getElementById('opcaoPlayer').setAttribute('src', 'images/pedra.png');
        jogador = 1;
    }
    else if (x == 2){
       document.getElementById('opcaoPlayer').setAttribute('src', 'images/papel.png');
       jogador = 2;
   }else{
       document.getElementById('opcaoPlayer').setAttribute('src', 'images/tesoura.png');
       jogador = 3;
   }

   sortear();
   verificar();

}

function sortear(){

 n = parseInt(Math.random() * 3 + 1);

 console.log(n);

 if (n == 1){

    document.getElementById('opcaoMaquina').setAttribute('src', 'images/pedra.png'); 
    maquina = 1;
}else if (n == 2){

    document.getElementById('opcaoMaquina').setAttribute('src', 'images/papel.png'); 
    maquina = 2;

}else{
 document.getElementById('opcaoMaquina').setAttribute('src', 'images/tesoura.png'); 
 maquina = 3;

}
}

async function verificar(){

    await sleep(200);

    if (maquina == jogador){

        alert("EMPATE!");
        window.location.reload(false);

    }else if ((maquina == 1 && jogador == 3) || (maquina == 2 && jogador == 1) || (maquina == 3 && jogador == 2)){ 

        alert("VOCÊ PERDEU!");
        window.location.reload(false);

    }else{
        alert("VOCÊ GANHOU!");
        window.location.reload(false);
    }
}
    

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	});

})(jQuery);