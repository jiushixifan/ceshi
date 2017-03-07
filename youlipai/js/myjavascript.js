$('#myCarousel').carousel('cycle');

$('.weixin').hover(function () {
    $("#erweima").toggle();
})

// $(document).ready(function(){
//     $("p, button, h1").click(function(event){
//         $("div").html("通过 " + event.target.nodeName + " 元素触发。");
//     });
// });
$('.navbar-right li').hover(function () {

})

$('.nav-h').scroll(function () {

})

$(window).scroll( function(event){
    $(".nav-h").css("background-color","#fff");


} );