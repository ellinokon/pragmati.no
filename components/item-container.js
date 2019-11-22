import React from 'react';
import classNames from './item-container.module.css'

function ItemContainer({children, className}) {
	const containerClassName = className
		? `${classNames.itemContainer} ${className}`
		: classNames.itemContainer;

	return (
		<div className={containerClassName}>
			<div className={classNames.itemContent}>
				{children}
			</div>
		</div>
	);
}

export default ItemContainer;
