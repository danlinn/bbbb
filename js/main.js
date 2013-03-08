$('#marquee').cycle();

function showHand() {
  if( $(window).scrollTop() > 776) {
    $('.hand-nav').addClass('active');
  } else {
    $('.hand-nav').removeClass('active');
  }
}

$(window).scroll(showHand);

$('a').smoothScroll({
  easing: 'swing',
  speed: 1400
});

$('aside').mouseover(function(){
  $('.hand-nav').removeClass('active'); 
}).mouseout(function() {
  $('.hand-nav').addClass('active');
});

setTimeout(function() {
  checkForFB(1);
  checkForMap(1);
}, 500);

function checkForFB( count ) {
  if ($('.fb_ltr').length>0) {
    $('.fb_ltr').css('height', 385).css('overflow-y', 'auto');
  } else {
    if ( count < 20 ) {
      setTimeout(function() {
        checkForFB( count + 1 );
      }, 500);
    }
  }
}
function checkForMap( count ) {
  if ($('#where small a').length>0) {
    $('#where small a').css('color', '#f00');
  } else {
    if ( count < 20 ) {
      setTimeout(function() {
        checkForFB( count + 1 );
      }, 500);
    }
  }
}

$('a.gallery').colorbox({ opacity:0.5 , rel:'group1' });

$('.ztoggle').click(function(){
  $('body').addClass('zombie').removeClass('wolf').removeClass('space');
});

$('.wolftoggle').click(function(){
  $('body').addClass('wolf').removeClass('zombie').removeClass('space');
});

$('.spacetoggle').click(function(){
	  $('body').addClass('space').removeClass('zombie').removeClass('wolf');
});

$( document ).ready( function() {
  themes = ['wolf','zombie','space'];
  randomnumber=Math.floor(Math.random()*3);
  switch(randomnumber) {
    case 0:
      $('body').addClass('wolf');
    break;
  case 1:
      $('body').addClass('zombie');
    break;
  case 2:
	  $('body').addClass('space');
  default:
    $('body').addClass('zombie');
    break;
  }
});
