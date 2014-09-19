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
	function Game() {
		this.title = 'Dungeon Crawl!';
	};
	Game.prototype = {
		constructor: Game,
		finish: function() {
			return true;
		},
		start: function() {
			return true;
		}
	};
	function _start() {
		this.game = new Game();
	};
	return {
		start: _start
	};
})();

__site.addEvent(window, 'load', function() {
	// calling __DC.start(); for great justice!
	window.__DC.start();
});