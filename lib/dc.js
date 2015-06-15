/**
 * @project dungeoncrawl
 * Crawl a simple dungeon!
 * @file dc.js
 * Primary client application driver
 * @author curtis zimmerman
 * @contact software@curtisz.com
 * @version 0.0.1a
 */
window.__DC = (typeof(window.__DC) === 'object') ? window__DC : (function() {
	"use strict";
	function Game( options ) {
		this.id = options.id;
		this.title = 'Dungeon Crawl!';
		this.world = {
			map: [],
			height: options.height,
			width: options.width,
			unitsize: 20
		};
	};
	Game.prototype = {
		constructor: Game,
		finish: function() {
			return this;
		},
		initialize: function() {
			return this;
		},
		start: function() {
			return this;
		}
	};
	function _start() {
		// populate options
		var options = {
			height: 600,
			id: __site.getID(8),
			width: 800
		};
		this.game = new Game(options);
	};
	return {
		start: _start
	};
})();

__site.addEvent(window, 'load', function() {
	// calling __DC.start(); for great justice!
	window.__DC.start();
});