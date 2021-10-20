import { DECK_COLORS, PLAYING_CARD_SUITS } from "../constants";

export type DeckColor = typeof DECK_COLORS[number];

export type PlayingCardSuit = typeof PLAYING_CARD_SUITS[number];

export type PlayingCardType = {
	value: number;
	color: DeckColor;
	colorValue: number;
	suit: PlayingCardSuit;
};