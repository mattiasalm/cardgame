import React from 'react';
import clsx from 'clsx';
import PropTypes, { InferProps } from "prop-types";
import './PlayingCardDecoration.css';
import { PlayingCardImage, PlayingCardSymbol } from '.';

export const PlayingCardDecoration: any = ({ color, suit }: InferProps<typeof PlayingCardDecoration.propTypes>) => {

	const getSymbolDecorationAmountArray = () => {
		switch (suit) {
			case 'jack':
			case 'queen':
			case 'king':
				return [];
			case 'ace':
				return [1];
			default:
				return [...new Array(Number(suit))];
		}
	};

	const useSymbol = getSymbolDecorationAmountArray().length > 0;

	const classNames = clsx(
		'playing-card__decoration',
		`suit--${suit}`
	);

	return (
		<div className={classNames}>
			{
				useSymbol && getSymbolDecorationAmountArray()
					.map((_, index) => (
						<PlayingCardSymbol key={index} color={color} />
					))
			}
			{
				!useSymbol && <PlayingCardImage color={color} suit={suit} />
			}
		</div>
	)
}


PlayingCardDecoration.propTypes = {
	color: PropTypes.string.isRequired,
	suit: PropTypes.string.isRequired,
};