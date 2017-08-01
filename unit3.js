var tdWidth
var winWidth
var winHeight
var tdHtml
var unitId
var coloWidth

$('document').ready(function(){
	winWidth = $(window).width();
	winHeight = $(window).height();
	tdWidth = Math.floor(winWidth/2);
	tdHeight = Math.floor(winHeight/2);
	coloWidth = Math.floor(winWidth/3);
	// alert(winWidth+'w x '+ tdWidth+'td width');

	$('#svg').attr('width', winWidth);
	$('#svg').attr('height', winHeight);

	$('#land').attr('width', winWidth);
	$('#land').attr('height', winHeight);

	$('#area').attr('width', winWidth);
	$('#area').attr('height', winHeight);

	$('#vlm').attr('width', winWidth);
	$('#vlm').attr('height', winHeight);
	// $('#land tr.header td').attr('width', winWidth);	
	// $('#inch1').attr('width', tdWidth);
	// $('#inch1').attr('height', tdHeight);

	$('#inch').height(tdHeight);
	$('#inch').width(winWidth);	
	$('#cm').height(tdHeight);

	$('#area').width(winWidth);
	$('#area').height(winHeight);

	$('#volume').width(winWidth);
	$('#volume').height(winHeight);

	$('#mass').width(winWidth);
	$('#mass').height(winHeight);
	$('.sect').height(winHeight);

	$('#colophon').width(winWidth);



});

// $(window).resize(function() {

// 	winWidth = $(window).width();
// 	winHeight = $(window).height();
// 	tdWidth = Math.floor(winWidth/2);
// 	tdHeight = Math.floor(winHeight/2);
// 	cmWidth = Math.floor(winWidth/5);

//  	$('.rect').attr('width', tdWidth);
// 	$('.rect').attr('height', tdHeight);
// 	$('.cmRect').attr('width', cmWidth);
// 	$('.cmRect').attr('height', tdHeight);
// });

