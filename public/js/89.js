
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

	return {
		idx : new idx(),
		nde : new nde(),
		nws : new nws(),
		item : {},
		debug : false
	};

}( jQuery, document, window );