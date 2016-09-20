$(document).ready(function(){
	
	// DO ANIMACJI
	wow = new WOW({
		offset: 200
	})
	wow.init();

	// DO ZMIANY TOPA
	//odliczam odleglosc klasy od gory strony
    var NavY = $('.sm-slider').offset().top;
    
    var stickyNav = function(){
	    var ScrollY = $(window).scrollTop();
	             
	    if (ScrollY > NavY) { 
	        $('body').addClass('zmien');
	    } else {
	        $('body').removeClass('zmien'); 
	    }
    };

    //id
    	var sekcje = ["sm-body", "sm-highlights", "sm-offer", "sm-about", "sm-opinions", "sm-contact"];
    	
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

    var przewijanie = function(){
    	//reset scrola
		$.scrollTo(0);

		
		// for(var i = 0; i < sekcje.length; i++){
	 //   		$('.sm-desktop-menu #'+sekcje[i]+'').click(function() { $.scrollTo($('.'+sekcje[i]+''), 1000); });	
	 //   		//console.log('#'+sekcje[i]+'    .'+sekcje[i]+'');
		// }
		
		//$('.sm-desktop-menu #sm-highlights').click(function() { $.scrollTo($('.sm-highlights'), 1000); });

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
    }

   zmiana();
   stickyNav();
   przewijanie();

    $(window).scroll(function() {
        stickyNav();
        zmiana();

        if($(this).scrollTop()>300) $('.scrollUp').fadeIn();
		else $('.scrollUp').fadeOut();	

    });






});


//funkcja odpowiadajaca za przewijanie poszczegolnych elementow
