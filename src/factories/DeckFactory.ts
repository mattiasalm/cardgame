import { PLAYING_CARD_SUITS, DECK_COLORS } from "../constants";
import { DeckColor, PlayingCardType } from "../types"

const createColor = (color: DeckColor): PlayingCardType[] =>
	PLAYING_CARD_SUITS.map((suit, index) => ({
		value: index + 1,
		color,
		colorValue: DECK_COLORS.indexOf(color) + 1,
		suit,
	}))

const create = () => [...DECK_COLORS].flatMap(createColor);
	

export const DeckFactory = {
	create
}