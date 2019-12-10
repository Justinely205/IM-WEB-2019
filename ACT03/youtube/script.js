
//Parallax effect

$("#container").mousemove(function(e) {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


//Horizontal Scroll
// http://www.dte.web.id/2013/02/event-mouse-wheel.html

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
        document.body.scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
})();

//Youtube API

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




      var player;
      var vids=[];
     function onYouTubeIframeAPIReady() {

//Acadianne
        player1 = new YT.Player('divPlayer1', {
          height: '0',
          width: '0',
          playerVars: {'start': 1 },
          videoId: 'NhS94CPBIxE',
      		events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
        vids.push(player1);

//accordion cambodian
    player2 = new YT.Player('divPlayer2', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 1 },
          videoId: 'XdjeB-iGKys',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player2);

//acoustic
    player3 = new YT.Player('divPlayer3', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 1 },
          videoId: 'e5mDRNVVIxI',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player3);

//austrian stoner rock
    player4 = new YT.Player('divPlayer4', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 1 },
          videoId: 'X13bLwtnvsA',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player4);

//afrocolombiano
    player5 = new YT.Player('divPlayer5', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 1 },
          videoId: 'YyW9qH1kYxg',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player5);

//athmostphere
    player6 = new YT.Player('divPlayer6', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 150 },
          videoId: 'tZK0CFu8Dzg',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player6);
    
//austrian contemporary classical
    player7 = new YT.Player('divPlayer7', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 6 },
          videoId: 'IgRUPWL6qow',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player7);

//azonto beat
    player8 = new YT.Player('divPlayer8', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 1 },
          videoId: 'sBqAN4T5XVY',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player8);

//australian metal
    player9 = new YT.Player('divPlayer9', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 19 },
          videoId: '3n7SfdWUUqA',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player9);

//antiviral pop
    player10 = new YT.Player('divPlayer10', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 10 },
          videoId: 'C1NVFRE_tmI',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player10);

//australian metalcore
    player11 = new YT.Player('divPlayer11', {
          height: '110',
          width: '0',
          //start time
           playerVars: {'start': 43 },
          videoId: 'Ul6WTsgC9w0',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player11);

//anime rock
    player12 = new YT.Player('divPlayer12', {
          height: '120',
          width: '0',
          //start time
           playerVars: {'start': 5 },
          videoId: '9DD6JvY06Ok',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player12);

//australian electropop
    player13 = new YT.Player('divPlayer13', {
          height: '150',
          width: '0',
          //start time
           playerVars: {'start': 15 },
          videoId: 'ScivV_9T3Yg',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player13);

//alternative dance
    player14 = new YT.Player('divPlayer14', {
          height: '150',
          width: '0',
          //start time
           playerVars: {'start': 1 },
          videoId: 'Uu9DWID35XU',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player14);

//alt-idol
    player15 = new YT.Player('divPlayer15', {
          height: '150',
          width: '0',
          //start time
           playerVars: {'start': 17 },
          videoId: 'gGazYfJEqns',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player15);

//ambient dub techno
    player16 = new YT.Player('divPlayer16', {
          height: '160',
          width: '0',
          //start time
           playerVars: {'start': 30 },
          videoId: '8_KeF4ruFDI',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player16);

//aggrotech
    player17 = new YT.Player('divPlayer17', {
          height: '170',
          width: '0',
          //start time
           playerVars: {'start': 45 },
          videoId: 'GdOxpUgDKBM',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player17);

//australian house
    player18 = new YT.Player('divPlayer18', {
          height: '180',
          width: '0',
          //start time
           playerVars: {'start': 60 },
          videoId: 'GVNkNdPRgMc',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player18);

//anglican liturgy
    player19 = new YT.Player('divPlayer19', {
          height: '0',
          width: '0',
          //start time
           playerVars: {'start': 60 },
          videoId: 'E1hBco-7y6M',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player19);

//art punk
    player20 = new YT.Player('divPlayer20', {
          height: '0',
          width: '0',
          //start time
           playerVars: {'start': 1 },
          videoId: '6nE8DFaxd94',
      		 events: {
                  'onStateChange': onPlayerStateChange
                    }
                });
    vids.push(player20);





      }
function play1() { 
        player1.playVideo();
      }
function play2() { 
        player2.playVideo();
      }
function play3() { 
        player3.playVideo();
      }
function play4() { 
        player4.playVideo();
      }
function play5() { 
        player5.playVideo();
      }
function play6() { 
        player6.playVideo();
      }
function play7() { 
        player7.playVideo();
      }
function play8() { 
        player8.playVideo();
      }
function play9() { 
        player9.playVideo();
      }
function play10() { 
        player10.playVideo();
      }
function play11() { 
        player11.playVideo();
      }
function play12() { 
        player12.playVideo();
      }
function play13() { 
        player13.playVideo();
      }
function play14() { 
        player14.playVideo();
      }
function play15() { 
        player15.playVideo();
      }
function play16() { 
        player16.playVideo();
      }
function play17() { 
        player17.playVideo();
      }
function play18() { 
        player18.playVideo();
      }
function play19() { 
        player19.playVideo();
      }
function play20() { 
        player20.playVideo();
      }



//Play for certain amount of time & stop after clicking different genre
  var done = false;
            function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING && !done) {
                    setTimeout(stopVideo, 10000);
                    done = true; 
                    pauseVideo(event.target.a.id);
                    return done = false;

                }
            }

 function pauseVideo(player_id) {
  for(var i=0;i<vids.length;i++){
    if (player_id !=vids[i].a.id)    
      vids[i].pauseVideo();

  }
 }

function stopVideo() {
        player2.stopVideo();
        player1.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
		player5.stopVideo();
		player6.stopVideo();
		player7.stopVideo();
		player8.stopVideo();
		player9.stopVideo();
		player10.stopVideo();
		player11.stopVideo();
		player12.stopVideo();
		player13.stopVideo();
		player14.stopVideo();
		player15.stopVideo();
		player16.stopVideo();
		player17.stopVideo();
		player18.stopVideo();
		player19.stopVideo();
		
		 }

