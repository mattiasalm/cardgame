import React from 'react';
import clsx from 'clsx';
import PropTypes, { InferProps } from "prop-types";


export const PlayingCardCorner: any = ({placement, children}: InferProps<typeof PlayingCardCorner.propTypes>) => {

	const classNames = clsx(
		'playing-card__corner',
		placement
	);

	return <div className={classNames}>{children}</div>
}
	

PlayingCardCorner.propTypes = {
	placement: PropTypes.string.isRequired,
};