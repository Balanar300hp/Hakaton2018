$(document).ready(function() {

    yBig =  window.innerHeight / $('.comp-screen-inner').height();
    xBig = window.innerWidth / $('.comp-screen-inner').width();

    $.keyframe.define([{
        name: 'toFull',
        from: {
          'transform': 'scale(1,1)',
          'transform-origin': '50% 50%'
        },
        to: {
          'transform': 'scale(' + xBig + ', ' + (yBig) + ')',
          'transform-origin': '50% 50%'
        }
      }]);

setTimeout(function(){
    //$('#header').toggleClass('showTitle');
  //$('#header').css('visibility', 'visible');
}, 800);

$('#header').toggleClass('showTitle');
$('#comp').toggleClass('showTitle');

$('.comp-base_comp').on('click', function() {
	$('.comp-screen').toggleClass('comp-screen-closed');
$('.comp-top').toggleClass('comp-top-closed');
});

$('#textChange').on('mouseover', function() {
  $('#textChange').html("<svg width = 30px height = 30px><line x1=10% y1=55% x2 = 95% y2 = 55% stroke=black stroke-width=12% stroke-linecap=round /><line x1=50% y1=15% x2 = 95% y2 = 55% stroke=black stroke-width=12% stroke-linecap=round /><line x1=50% y1=95% x2 = 95% y2 = 55% stroke=black stroke-width=12% stroke-linecap=round /><svg>");
});
$('#textChange').on('mouseleave', function() {
  $('#textChange').html("Больше о нас");
});

	
$('#textChange').on('click', function() {

    $('.comp-base_comp').css("display","none");
    $('.comp-base_shadow').css("display","none");
    $('.comp-screen-inner-shine').css('display', 'none');
    $('#textChange').css('display', 'none');

    $('.comp-screen').playKeyframe({
        name: 'toFull',
        duration: "0.8s",
        timingFunction: 'ease-in-out',
        iterationCount: 1,
        direction: 'normal',
        fillMode: 'forwards',
        complete: function(){}
     });

	setTimeout(function(){
		location.href = "../content/Kudashov.html";
	},1000);
  });


});



