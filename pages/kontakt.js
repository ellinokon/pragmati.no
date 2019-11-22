import React from 'react';
import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import ContactForm from '../components/contact-form';

function Index() {
	return (
		<Layout>
			<NextSeo
				title="kontakt - Pragmati"
				description="Ta kontakt med Pragmati ved bruk av skjema eller epost."
			/>

			<h1>Kontakt</h1>

			<ContactForm />
		</Layout>
	);
}

export default Index;
