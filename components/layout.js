import React from 'react';
import Link from 'next/link';
import PragmatiLogo from '../assets/pragmati-logo.svg';
import classNames from './layout.module.css';

import './global.css';

function Layout({ children }) {
	return (
		<>
			<header className={classNames.header}>
				<Link href="/">
					<a title="Link til forsiden">
						<PragmatiLogo className={classNames.logo} />
					</a>
				</Link>
			</header>

			<main>{children}</main>

			<footer className={classNames.footer}>
				<p>
					<Link href="/">
						<a>Hjem</a>
					</Link>
					{' - '}
					<Link href="/kontakt">
						<a>Kontakt</a>
					</Link>
				</p>

				<p>© 2019 Pragmati AS - Orgnr. 921 847 009</p>
			</footer>
		</>
	);
}

export default Layout;
