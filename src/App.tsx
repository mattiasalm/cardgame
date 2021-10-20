import React from 'react';
import './App.css';
import { PlayingCard } from './components';
import { DeckFactory } from './factories';
import { PlayingCardType } from './types';
import { DeckUtil } from './utils';

interface IProps {
}

interface IState {
	deck: PlayingCardType[];
}

export class App extends React.Component<IProps, IState>{
	constructor(props: any) {
		super(props);
		this.state = {
			deck: DeckFactory.create()
		}
	}

	shuffleDeck = () => {
		this.setState({
			deck: DeckUtil.shuffleCards(this.state.deck)
		})
	}

	sortDeck = () => {
		this.setState({
			deck: DeckUtil.sortCards(this.state.deck)
		})
	}

	addDeck = () => {
		this.setState({
			deck: [...this.state.deck, ...DeckFactory.create()]
		})
	}

	reset = () => {
		this.setState({
			deck: DeckFactory.create()
		})
	}

	drawCard = () => {
		this.setState({
			deck: this.state.deck.slice(1)
		})
	}

	render() {
		if (this.state.deck.length > 0) {
			const currentCard = this.state.deck[0];

			return (
				<main>
					<PlayingCard onClick={this.drawCard} color={currentCard.color} suit={currentCard.suit} />
					<div className='note--counter'>{this.state.deck.length} cards</div>
					<button className='button--shuffle' onClick={this.shuffleDeck}>Shuffle</button>
					<button className='button--sort' onClick={this.sortDeck}>Sort</button>
					<button className='button--add-deck' onClick={this.addDeck}>Add deck</button>
					<button className='button--reset' onClick={this.reset}>Reset</button>
				</main>
			)
		}

		return (
			<main>
				<button className='button--reset' onClick={this.reset}>Reset</button>
			</main>
		)
	}
}
