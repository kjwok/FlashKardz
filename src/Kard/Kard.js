import React, { Component } from 'react';
import './Kard.css';

class Kard extends Component {
	state = {
		inEnglish: true
	}

	flipLang = (event) => {
		let flip = !this.state.inEnglish;
		this.setState({inEnglish:!this.state.inEnglish})
		console.log('current state is' + flip);

	}

	render () {

		const style = {
      backgroundColor: 'turquoise',
      font: 'inherit',
      border: '1px solid black',
      padding: '60px',
      cursor: 'pointer'
    };

		let words = this.props.card.en;
		//console.log('Curr words - '+words);
		if(!this.state.inEnglish) {
			//console.log('DE');
			words = this.props.card.de;
		}	
		//console.log('Last Curr words - '+words);

		return(

			<div className="Kard" onClick={this.flipLang}
				style={style}>
				<p>{words}</p>
			</div>
			);
	};
};

export default Kard;