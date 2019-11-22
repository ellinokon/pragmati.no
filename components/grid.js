import React from 'react';
import classNames from './grid.module.css';

function GridItem({children}) {
	return (
		<div className={classNames.gridItem}>{children}</div>
	);
}

function Grid({ children, className, ...props }) {
	const gridClassName = className
		? `${classNames.grid} ${className}`
		: classNames.grid;

	return (
		<div className={gridClassName} {...props}>
			{children}
		</div>
	);
}

export default Grid;

export { GridItem };
