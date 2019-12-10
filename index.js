//$(document).ready(function(){
//	$(".act1").hover(function(){
//		$(".info").append("hello");
//	}).mouseleave(function() {
//		$(".info").append("bye")
//	})
//})

function showText(text){
    document.getElementById("info").innerHTML=text;
}
function hide(){
    document.getElementById("info").innerHTML="";
}

$(document).ready(function(){
  $(".act1").click(function(){
    window.open('google.com');
  });
});