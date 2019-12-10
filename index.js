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
    window.open('https://justinely205.github.io/IM-WEB-2019/ACT01/index.html');
  });
});

$(document).ready(function(){
  $(".act2").click(function(){
    window.open('https://justinely205.github.io/IM-WEB-2019/ACT02/index.html');
  });
});

$(document).ready(function(){
  $(".act3").click(function(){
    window.open('https://justinely205.github.io/IM-WEB-2019/ACT03/index.html');
  });
});