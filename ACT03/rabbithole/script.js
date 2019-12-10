

//Horizontal Scroll
// http://www.dte.web.id/2013/02/event-mouse-wheel.html

//(function() {
//    function scrollHorizontally(e) {
//        e = window.event || e;
//        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//        document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
//        document.body.scrollLeft -= (delta*40); // Multiplied by 40
//        e.preventDefault();
//    }
//    if (window.addEventListener) {
 //       // IE9, Chrome, Safari, Opera
 //       window.addEventListener("mousewheel", scrollHorizontally, false);
 //       // Firefox
 //       window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
 //   } else {
        // IE 6/7/8
 //       window.attachEvent("onmousewheel", scrollHorizontally);
  //  }
//})();



 function getVideo() {
  var keyword = prompt("search something on yt")
      $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyATa6jf8BTlYk7cyV_k-jfD-wmxIAAp-1o',
            q: keyword,
            part: 'snippet',
            maxResults: 50,
            type: 'video',
            videoEmbeddable: true,
            playerVars: {rel: 0, showinfo: 0, ecver: 2}
         

        },
        success: function(data){
            embedVideo(data)
        },
        error: function(response){
            console.log("Request Failed");
        }
      });
    }



    function embedVideo(data) {
    $('.firstvid').attr('src', 'https://www.youtube.com/embed/' + data.items[Math.floor((Math.random() * 50) + 2)].id.videoId)
    $('h3').text(data.items[0].snippet.title)

}

getVideo();