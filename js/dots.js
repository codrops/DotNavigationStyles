/**
 * menu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function DotNav( el, options ) {
		this.nav = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	DotNav.prototype.options = {};

	DotNav.prototype._init = function() {
		// special case "dotstyle-hop"
		var hop = this.nav.parentNode.className.indexOf( 'dotstyle-hop' ) !== -1;

		var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;

		dots.forEach( function( dot, idx ) {
			dot.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				if( idx !== current ) {
					dots[ current ].className = '';

					// special case
					if( hop && idx < current ) {
						dot.className += ' current-from-right';
					}

					setTimeout( function() {
						dot.className += ' current';
						current = idx;
						if( typeof self.options.callback === 'function' ) {
							self.options.callback( current );
						}
					}, 25 );						
				}
			} );
		} );
	}

	// add to global namespace
	window.DotNav = DotNav;

})( window );