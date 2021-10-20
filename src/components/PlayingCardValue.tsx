import React from 'react';
import clsx from 'clsx';
import PropTypes, { InferProps } from "prop-types";


export const PlayingCardValue: any = ({color, suit}: InferProps<typeof PlayingCardValue.propTypes>) => {

	const classNames = clsx(
		'playing-card__value',
		{
			'color--red': ['diamonds', 'hearts'].includes(color),
		}
	);

	const getSuitValue = () => {
		switch (suit) {
			case 'jack':
			case 'queen':
			case 'king':
			case 'ace':
				return suit.slice(0,1).toUpperCase();
			default:
				return suit;
		}
	}
	
	return <div className={classNames}>{getSuitValue()}</div>
}
	

PlayingCardValue.propTypes = {
	color: PropTypes.string.isRequired,
	suit: PropTypes.string.isRequired,
};