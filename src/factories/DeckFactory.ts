import { PLAYING_CARD_SUITS, DECK_COLORS } from "../constants";
import { DeckColor, PlayingCardType } from "../types"

const createColor = (color: DeckColor): PlayingCardType[] =>
	[...new Array(13)].map((_value, index) => ({
		value: index + 2,
		color,
		colorValue: DECK_COLORS.indexOf(color) + 1,
		suit: PLAYING_CARD_SUITS[index],
	}))

const create = () => [...DECK_COLORS].flatMap(createColor);
	

export const DeckFactory = {
	create
}