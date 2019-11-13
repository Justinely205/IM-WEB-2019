
console.log("Hello world!");


	$("p span").hover(function(){
       $(this).animate({fontSize: "200px"}, 300)
   }, function() {
      $(this).animate({fontSize: "20"}, 300)  
   })
