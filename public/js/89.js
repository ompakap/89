
/**
 * CreateDt : 2016-08-23
 */
if ("undefined" == typeof jQuery)
    throw new Error("Jelly's JavaScript requires jQuery");

var jelly = function( $, d, w ) {
	
	"use strict";
	
	// index
	var idx = function () 
	{

	};

	// news
	var nws = function () 
	{

	};

	// news detail
	var nde = function () 
	{

	};

	var stf = function ()
	{

	};
		
	// product detail
	var pdd = function ()
	{

	};

	idx.prototype = {
		
		// setup button
		$btn_search : $('#btn_search'),

		// setup url
		data_url : 'func/ajax/retrieve_data.php',

		// initialize script
		init : function()
		{
			var self = this;
			
			$(function() {

				self.overideEvent();

			});
		},

		overideEvent : function() 
		{

		}
	};

	nws.prototype = {
		
		// initialize script
		init : function()
		{
			var self = this;
			
			$(function() {

				self.overideEvent();

			});
		},

		overideEvent : function() 
		{
			/*
			$('[data-link]').click(function() {

				
				window.location = _URL + 'news/detail/22023';

			});*/
		}
	};

	nde.prototype = {
		
		// setup url
		data_url : 'detail/ajax_getdetail',

		// initialize script
		init : function()
		{
			var self = this;
			
			$(function() {

				self.overideEvent();

			});
		},

		overideEvent : function() 
		{

		}
	};

	stf.prototype = {
		
		data_url : '',

		init : function() 
		{
			var self = this;

			$(function() {
				
				self.overideEvent();

			});
		},

		overideEvent : function()
		{
			var self = this;

			$('#btn-chkall-serial').click(function() {
				
				var serial = $('#input-serial').val();

				self.chkserials(serial);
			});
		},

		chkserials : function(data)
		{
			$.post("product/ajax_chkserial_all", { pdata : data }, function(msg) {
				
				if( msg.FAKE )
				{
					$('#isfake').modal('show');
				}
				else if( msg.DUP )
				{
					$('#isdup').modal('show');
				}
				else if( !msg.FAKE )
				{
					$('#isreal').modal('show');
					//alert( "This is " + msg.PRODNAME )
				}
			}, 'json');
		}	
	
	};

	pdd.prototype = {
		
		data_url : '',

		init : function() 
		{
			var self = this;

			$(function() {
				
				self.overideEvent();

			});
		},

		overideEvent : function()
		{
			var self = this;

			var i1 = $('#doslick1');
			i1.on('init', function(t, e) {});
			i1.slick({
				dots: !1,
				infinite: !0,
				autoPlay: !1,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: !0
			});


			var i2 = $('#doslick2');
			i2.on('init', function(t, e) {});
			i2.slick({
				dots: !1,
				infinite: !0,
				autoPlay: !1,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: !0
			});


			var e1 = $('#doslicke1');
			e1.on('init', function(t, e) {});
			e1.slick({
				dots: !1,
				infinite: !0,
				autoPlay: !1,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: !0
			});
			

			var i = 3
			  , t = i * 1000
			  , e = !1;
			$('.row-slide-detail .slide-box').slick({
				autoplay: e,
				autoplaySpeed: t,
				fade: !0,
				draggable: !1,
				responsive: [{
					breakpoint: 768,
					settings: {
						draggable: !0
					}
				}]
			});
			$('.row-slide-howto .slide-box').slick({
				autoplay: e,
				autoplaySpeed: t,
				fade: !0,
				draggable: !1,
				responsive: [{
					breakpoint: 768,
					settings: {
						draggable: !0
					}
				}]
			});

		}
	
	};

	return {
		idx : new idx(),
		nde : new nde(),
		nws : new nws(),
		stf : new stf(),
		pdd : new pdd(),
		item : {},
		debug : false
	};

}( jQuery, document, window );