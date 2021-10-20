import React from 'react';
import clsx from 'clsx';
import PropTypes, { InferProps } from "prop-types";


export const PlayingCardSymbol: any = ({color}: InferProps<typeof PlayingCardSymbol.propTypes>) => {

	const classNames = clsx(
		'playing-card__symbol',
		{
			'color--red': ['diamonds', 'hearts'].includes(color),
		}
	);

	const getColorSymbol = () => {
		switch (color) {
			case 'clubs':
				return '♣';
			case 'diamonds':
				return '♦';
			case 'hearts':
				return '♥';
			case 'spades':
			default:
				return '♠'
		}
	}
	
	return <div className={classNames}>{getColorSymbol()}</div>
}
	

PlayingCardSymbol.propTypes = {
	color: PropTypes.string.isRequired,
};