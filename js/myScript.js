$(document).ready(function() {
	// menu function //
	$('.button').click(function () {
	  var target = '#' + $(this).data('target')
	  var $target = $(target)
	  if ($('.content').hasClass('active')) {
	    $('.content').removeClass('active')
	  }
	  $target.addClass('active');
	});

	$('.close').click(function() {
	  $('.content').removeClass('active');
	})
	// logo background //
	$('.button').mouseover(function () {
	  var a = $(this).index()
	  logoPosition = a * -1170
	  var target = $(this).data('target')
	  logoBG = "url('./img/" + target + ".jpg')"
	  $('.logo img').css({
	  	'background':logoBG,
	  	'background-position':logoPosition
	  });
	})
	// view-box //
	var image = $('.img');
	var viewer = $('.viewer');
	var mainImage = $('.main-viewer');
	var $next = $('.next');
	var $prev = $('.prev');

	image.click(function(){
	  var mainContent = $(this).html();
	  if(image.hasClass('open')) {
	    image.removeClass('open');  
	  }
	  $(this).addClass('open');
	  viewer.fadeIn(200);
	  mainImage.html(mainContent);
	  mainImage.find('img').removeAttr('style');
	})

	$next.click(function() {
	  var all = $('.open').siblings('.img').andSelf().length;
	  if ($('.open').index() === all - 1 ) {
	    return;
	  } 
	  $('.open').removeClass('open').next().toggleClass('open');
	  var main = $('.open').html();
	  mainImage.html(main);
	  mainImage.find('img').removeAttr('style');
	})
	$prev.click(function() {
	  var all = $('.open').siblings('.img').length;
	  if ($('.open').index() === 0) {
	    return;
	  } 
	  $('.open').removeClass('open').prev().toggleClass('open');
	  var main = $('.open').html();
	  mainImage.html(main);
	  mainImage.find('img').removeAttr('style');
	})
	mainImage.click(function() {
	  viewer.fadeOut(200);
	  image.removeClass('open');
	  mainImage.find('img').remove;
	})
})
