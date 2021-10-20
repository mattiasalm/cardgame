import React from 'react';
import clsx from 'clsx';
import PropTypes, { InferProps } from "prop-types";


export const PlayingCardImage: any = ({color, suit}: InferProps<typeof PlayingCardImage.propTypes>) => {

	const classNames = clsx(
		'playing-card__image'
	);

	const image = `/images/${color}_${suit}.jpg`

	return <img className={classNames} alt='' src={image} />
}
	

PlayingCardImage.propTypes = {
	color: PropTypes.string.isRequired,
	suit: PropTypes.string.isRequired,
};