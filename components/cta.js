import React from 'react';
import Button from './button';
import classNames from './cta.module.css';

function CTA() {
	return (
		<div className={classNames.container}>
			<Button href="/kontakt" className={classNames.primaryAction}>Ta kontakt</Button>
			<span>eller</span>
			<span>
				<a href="#">se hva vi kan bistå med</a>
			</span>
		</div>
	);
}

export default CTA;
