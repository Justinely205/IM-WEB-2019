//basic flashlight & figure running code form jquery

$(function() {
	$('body').flashlight(200, 0.75, true);
	
});


$.fn.flashlight = function(width, darkness, alien) {

	//lightswitch on the page
	var lightSwitch = $('<div><div class="toggle off">').addClass('lightSwitch');
	var spotLight = $('<div>').addClass('spotLight');
	var monster = $('<div>').addClass('monster monsterHide');
	var holder = $('<div>').addClass('holder').append(monster);

	if (alien === true ) {
		$('body').append(holder, spotLight, lightSwitch);
	}
	else {
		$('body').append(spotLight, lightSwitch);
	}

	var shadow = 'rgba(0,0,0)'; // --->black background
	//var shadow = 'rgba(0,0,0,' + darkness + ')'; //---->Trasnparent black
	$('.show').css({ boxShadow: '0 0 0 10px ' + shadow});

	// toggle .spotlight with .lightSwitch
	$(lightSwitch).on('click', function(event) {
		event.preventDefault();
		// console.log(event);

	// when lightswtich 'on' add an overlay div "spotlight"	
	// when lightswitch 'off' remove overlay div
		$('.spotLight').toggleClass('show').width(width).height(width);
		$('.lightSwitch').toggleClass('turntOff');
		$('.toggle').toggleClass('on');
		$('.monster').toggleClass('alienStep');
		$('.show').css({ boxShadow: '0 0 0 20px ' + shadow});
		$('.holder').addClass('alienSlide');


		if ( $('.lightSwitch').hasClass('turntOff')) {
			$('.show').css({ boxShadow: '0 0 0 20000px ' + shadow});
		
		}
		else {
			$('.spotLight').css({ boxShadow: '0 0 0 0 transparent'});
		}

		// Set mouse offset
		var offset = width/2;

		$(window).on('mousemove', function(event) {
			// grab the coordinates of the mouse
			var mouseX = event.pageX;
			var mouseY = event.pageY;

			// set the coordinates of .spotLight to be the same as the mouse (plus the height/width offset)
			$('.show').css({ 
				top: mouseY, 
				left: mouseX, 
				transform: 'translate(-'+ offset + 'px , -' + offset + 'px)'
			});
		
		}); // end mousemove

		$('.holder').addClass('alienSlide');

		// make gremlin surprised on mouseover 
		$('.monster').on('mouseover', function(){
			$('.holder').addClass('paused');
			$('.monster').removeClass('alienStep').addClass('alienSurprise');
			});
		$('.monster').on('mouseout', function(){
			$('.holder').removeClass('paused');
			$('.monster').removeClass('alienSurprise').addClass('alienStep');
		});

//Catch Alien on click
//Multiple Aliens show up - his familyyyyyy
$(document).ready(function(){
    $(".holder").click(function(){
    $(this).fadeOut();
    $('.show').css({ boxShadow: '0 0 0'});
    $('.ufo').get(0).play();
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
    animateDiv('.h');
    animateDiv('.i');
    animateDiv('.j');
    animateDiv('.k');
    animateDiv('.l');
    animateDiv('.m');
    animateDiv('.n');
    animateDiv('.o');
    animateDiv('.p');
    animateDiv('.q');
    animateDiv('.r');
    animateDiv('.s');
    animateDiv('.t');
    animateDiv('.u');
    animateDiv('.v');
    animateDiv('.w');
    animateDiv('.x');
    animateDiv('.y');
    animateDiv('.z');
    })
});


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var move = makeNewPosition();
    $(myclass).animate({ top: move[0], left: move[1] }, 8000,  
  
    function(){
      animateDiv(myclass);

    });
};



	}); // end lightSwitch click

}; // end spotLight fn()



//Randomize position of Alien
$(document).ready(function(){
	moveRandomly();
})

function moveRandomly() {

	setInterval(function(){

	var position= Math.floor(Math.random()* $(window).height() )

	console.log(position)

$(".holder").css({
	"position":"fixed",
	"top":position,
})
 }, 2000);
}






