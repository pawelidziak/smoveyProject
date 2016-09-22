$(document).ready(function(){
	
	// DO ANIMACJI
	wow = new WOW({
		offset: 200
	})
	wow.init();
	
// ################################################
// #################
// ################# ZMIENNE GLOBALNE
// #################
// ################################################
	
	// do zmiany topa - odliczam odleglosc klasy od gory strony
    var NavY = $('.sm-slider').offset().top;
    
    // id sekcji w html
    var sekcje = ["sm-body", "sm-highlights", "sm-offer", "sm-about", "sm-opinions", "sm-contact"];

// ################################################
// #################
// ################# FUNKCJE
// #################
// ################################################    
	
	//funkcja do zmniejszenia topa
    var stickyNav = function(){
	    var ScrollY = $(window).scrollTop();
	    
	    //gdy mine slider zmiejszam topa, czyli dodaje klase 'zmien'
	    if (ScrollY > NavY) { 
	        $('body').addClass('changeTop');
	    } else {
	        $('body').removeClass('changeTop'); 
	    }
    };

   	// funkcja zmienia kolory w menu gdy scrolujemy
    var zmiana = function(){
    	var whereIm = $(window).scrollTop();

    	var Start = $('.sm-body').offset().top - 100;
    	var Zalety = $('.sm-highlights').offset().top - 100;
    	var Oferta = $('.sm-offer').offset().top - 100;
    	var Omnie = $('.sm-about').offset().top - 100;
    	var Opinie = $('.sm-opinions').offset().top - 100;
    	var Kontakt = $('.sm-contact').offset().top - 100;
    	var Footer = $('.sm-footer').offset().top - 100;
    	
    	var sekcjeInt = [Start, Zalety, Oferta, Omnie, Opinie, Kontakt, Footer];

    	for(var i = 0; i < sekcjeInt.length; i++){
    		
	    	if(whereIm >= sekcjeInt[i] && whereIm <= sekcjeInt[i+1]){
	    		$('.sm-desktop-menu #'+sekcje[i]+'').addClass('activePage');
	    		
	    	}
	    	else{
	    		$('.sm-desktop-menu #'+sekcje[i]+'').removeClass('activePage');
	    	}
	    }
	    
    }

    // funkcja odpowiadajaca za przewijanie elementow na stronie
    var przewijanie = function(){
    	//reset scrola
		$.scrollTo(0);

		$('.sm-desktop-menu #'+sekcje[0]+'').click(function() { $.scrollTo($('.'+sekcje[0]+''), 1000); });	
		$('.sm-desktop-menu #'+sekcje[1]+'').click(function() { $.scrollTo($('.'+sekcje[1]+''), 1000); });	
		$('.sm-desktop-menu #'+sekcje[2]+'').click(function() { $.scrollTo($('.'+sekcje[2]+''), 1000); });	
		$('.sm-desktop-menu #'+sekcje[3]+'').click(function() { $.scrollTo($('.'+sekcje[3]+''), 1000); });
		$('.sm-desktop-menu #'+sekcje[4]+'').click(function() { $.scrollTo($('.'+sekcje[4]+''), 1000); });
		$('.sm-desktop-menu #'+sekcje[5]+'').click(function() { $.scrollTo($('.'+sekcje[5]+''), 1000); });

		$('#mobile-dropdown #'+sekcje[0]+'').click(function() { $.scrollTo($('.'+sekcje[0]+''), 1000); });	
		$('#mobile-dropdown #'+sekcje[1]+'').click(function() { $.scrollTo($('.'+sekcje[1]+''), 1000); });	
		$('#mobile-dropdown #'+sekcje[2]+'').click(function() { $.scrollTo($('.'+sekcje[2]+''), 1000); });	
		$('#mobile-dropdown #'+sekcje[3]+'').click(function() { $.scrollTo($('.'+sekcje[3]+''), 1000); });
		$('#mobile-dropdown #'+sekcje[4]+'').click(function() { $.scrollTo($('.'+sekcje[4]+''), 1000); });
		$('#mobile-dropdown #'+sekcje[5]+'').click(function() { $.scrollTo($('.'+sekcje[5]+''), 1000); });

		$('.scrollUp').click(function() { $.scrollTo($('.sm-body'), 1000); });
		$('.orbit a').click(function() { $.scrollTo($('.sm-start'), 1000); });
    }



    // wywolanie funkcji
   	zmiana();
   	stickyNav();
   	przewijanie();

   	// funkcje operujace na scrollu trzeba wywolac ponownie
    $(window).scroll(function() {
        stickyNav();
        zmiana();

        if($(this).scrollTop()>300) $('.scrollUp').fadeIn();
		else $('.scrollUp').fadeOut();	

    });






});


//funkcja odpowiadajaca za przewijanie poszczegolnych elementow
