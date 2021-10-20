import React from 'react';
import PropTypes, { InferProps } from "prop-types";
import { PlayingCardValue, PlayingCardSymbol, PlayingCardCorner, PlayingCardDecoration } from '.';


export const PlayingCard: any = (props: InferProps<typeof PlayingCard.propTypes>) =>
	<div className='playing-card' onClick={props.onClick}>
		<PlayingCardCorner placement='top'>
			<PlayingCardValue {...props} />
			<PlayingCardSymbol {...props} />
		</PlayingCardCorner>

		<PlayingCardDecoration {...props} />

		<PlayingCardCorner placement='bottom'>
			<PlayingCardValue {...props} />
			<PlayingCardSymbol {...props} />
		</PlayingCardCorner>
	</div>

PlayingCard.propTypes = {
	color: PropTypes.string.isRequired,
	suit: PropTypes.string.isRequired
};