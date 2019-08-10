import React, { Component } from 'react';
import './NavMenu.css';

class NavMenu extends Component {

	render () {
		return(

				<div className="NavButtons">
					<nav>
						<a class="" href="">German</a>
						<a class="" href="">Bayerisch</a>
						<a class="" href="">Create a Deck!</a>
					</nav>
						<form>
							<input type="search" placeholder="Search"
							></input>
						</form>
				</div>

			);
	};
};

export default NavMenu;