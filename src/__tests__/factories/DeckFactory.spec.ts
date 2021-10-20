import { DeckFactory } from '../../factories'
import { PlayingCardType } from '../../types';

describe('DeckFactory', () => {
	describe('create', () => {
		it('should create deck', () => {
			// Arrange
			const expectedResult: PlayingCardType[] = [
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "2",
					"value": 2,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "3",
					"value": 3,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "4",
					"value": 4,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "5",
					"value": 5,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "6",
					"value": 6,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "7",
					"value": 7,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "8",
					"value": 8,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "9",
					"value": 9,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "10",
					"value": 10,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "jack",
					"value": 11,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "queen",
					"value": 12,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "king",
					"value": 13,
				},
				{
					"color": "clubs",
					"colorValue": 1,
					"suit": "ace",
					"value": 14,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "2",
					"value": 2,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "3",
					"value": 3,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "4",
					"value": 4,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "5",
					"value": 5,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "6",
					"value": 6,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "7",
					"value": 7,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "8",
					"value": 8,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "9",
					"value": 9,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "10",
					"value": 10,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "jack",
					"value": 11,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "queen",
					"value": 12,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "king",
					"value": 13,
				},
				{
					"color": "diamonds",
					"colorValue": 2,
					"suit": "ace",
					"value": 14,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "2",
					"value": 2,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "3",
					"value": 3,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "4",
					"value": 4,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "5",
					"value": 5,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "6",
					"value": 6,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "7",
					"value": 7,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "8",
					"value": 8,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "9",
					"value": 9,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "10",
					"value": 10,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "jack",
					"value": 11,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "queen",
					"value": 12,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "king",
					"value": 13,
				},
				{
					"color": "hearts",
					"colorValue": 3,
					"suit": "ace",
					"value": 14,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "2",
					"value": 2,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "3",
					"value": 3,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "4",
					"value": 4,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "5",
					"value": 5,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "6",
					"value": 6,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "7",
					"value": 7,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "8",
					"value": 8,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "9",
					"value": 9,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "10",
					"value": 10,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "jack",
					"value": 11,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "queen",
					"value": 12,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "king",
					"value": 13,
				},
				{
					"color": "spades",
					"colorValue": 4,
					"suit": "ace",
					"value": 14,
				}
			];
	
			// Act
			const result = DeckFactory.create();
	
			// Assert
			expect(result).toMatchObject(expectedResult);
		})
	})
})