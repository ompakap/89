
/**
 * CreateDt : 2016-08-23
 */
if ("undefined" == typeof jQuery)
    throw new Error("Travflex Golf's JavaScript requires jQuery");

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

	return {
		idx : new idx(),
		nde : new nde(),
		nws : new nws(),
		stf : new stf(),
		item : {},
		debug : false
	};

}( jQuery, document, window );