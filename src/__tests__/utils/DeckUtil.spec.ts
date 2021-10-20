import { DeckFactory } from '../../factories';
import { DeckUtil } from '../../utils';

describe('DeckUtil', () => {
	describe('shuffleCards', () => {
		it('should shuffle deck', () => {
			// Arrange
			const deck = DeckFactory.create();
	
			// Act
			const shuffledDeck = DeckUtil.shuffleCards(deck);
	
			// Assert
			expect(shuffledDeck.length).toBe(deck.length);
			expect(shuffledDeck).not.toMatchObject(deck);
		})
	
		it('can shuffle deck multiple decks', () => {
			// Arrange
			const decks = [...DeckFactory.create(), ...DeckFactory.create(), ...DeckFactory.create(), ...DeckFactory.create()];
	
			// Act
			const shuffledDeck = DeckUtil.shuffleCards(decks);
	
			// Assert
			expect(shuffledDeck.length).toBe(decks.length);
			expect(shuffledDeck).not.toMatchObject(decks);
		})
	})

	describe('sortCards', () => {
		it('should sort cards in deck', () => {
			// Arrange
			const deck = DeckFactory.create();

			// Act
			const sortedDeck = DeckUtil.sortCards(deck);

			// Assert
			expect(sortedDeck.length).toBe(deck.length);
			expect(sortedDeck[0].color).toBe('clubs');
			expect(sortedDeck[0].suit).toBe('2');
			expect(sortedDeck[51].color).toBe('spades');
			expect(sortedDeck[51].suit).toBe('ace');
		})

		it('should sort cards in multiple decks', () => {
			// Arrange
			const decks = [...DeckFactory.create(), ...DeckFactory.create(), ...DeckFactory.create(), ...DeckFactory.create()];

			// Act
			const sortedDecks = DeckUtil.sortCards(decks);

			// Assert
			expect(sortedDecks.length).toBe(decks.length);

			// All four first cards should be the same
			expect(sortedDecks[0].color).toBe('clubs');
			expect(sortedDecks[0].suit).toBe('2');
			expect(sortedDecks[1].color).toBe('clubs');
			expect(sortedDecks[1].suit).toBe('2');
			expect(sortedDecks[2].color).toBe('clubs');
			expect(sortedDecks[2].suit).toBe('2');
			expect(sortedDecks[3].color).toBe('clubs');
			expect(sortedDecks[3].suit).toBe('2');
		})
	})
})