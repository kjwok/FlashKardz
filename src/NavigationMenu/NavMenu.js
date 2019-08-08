import React, { Component } from 'react';
import './NavMenu.css';

class NavMenu extends Component {

	render () {
		return(
			<div>
				<nav className="NavButtons">
					<a class="" href="">German</a>
					<a class="" href="">Bayerisch</a>
					<a class="" href="">Create a Deck!</a>
				</nav>
			</div>
			/*<div className="MenuBar">
					<form>
						<input type="search">
					</form>
			</div>*/
			);
	};
};

export default NavMenu;