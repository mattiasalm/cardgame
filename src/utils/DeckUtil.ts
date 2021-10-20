import { PLAYING_CARD_SUITS } from "../constants";
import { PlayingCardType } from "../types";

// Fisher-Yates shuffle
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
const shuffleCards = (deck: PlayingCardType[]) => {
	const newDeck = [...deck];
	let i = newDeck.length;
	while (i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
	}

	return newDeck;
}

const sortCards = (deck: PlayingCardType[]) => {
	let sortedDeck: PlayingCardType[] = [];
	PLAYING_CARD_SUITS.forEach(suit => {
		const sortedCards = deck
			.filter(card => card.suit === suit)
			.sort((cardA, cardB) => cardA.colorValue - cardB.colorValue);
		sortedDeck = [...sortedDeck, ...sortedCards];
	})

	return sortedDeck;
}

export const DeckUtil = {
	shuffleCards,
	sortCards
}
