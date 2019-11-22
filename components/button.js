import React from 'react';
import Link from 'next/link';
import classNames from './button.module.css';

function Button({ children, className, href, type = 'button', ...props }) {
	const buttonClassName = className
		? `${classNames.button} ${className}`
		: classNames.button;

	if (href) {
		if (href.indexOf('http') === 0) {
			return (
				<a className={buttonClassName} {...{ href }} {...props}>
					{children}
				</a>
			);
		} else {
			return (
				<Link {...{ href }}>
					<a className={buttonClassName} {...props}>
						{children}
					</a>
				</Link>
			);
		}
	}

	return (
		<button className={buttonClassName} {...{ type }} {...props}>
			{children}
		</button>
	);
}

export default Button;
