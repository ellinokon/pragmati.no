import React from 'react';
import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import CTA from '../components/cta';
import ProjectItem from '../components/project-item';
import Grid, { GridItem } from '../components/grid';

function Index() {
	return (
		<Layout>
			<NextSeo
				title="Pragmati"
				description="Trenger du hjelp til utvikling av eksisterende eller nye
				produkter på nett? Pragmati leverer utvikling/design av nettsider og
				applikasjoner."
			/>
			
			<h1>Vi utvikler interaktive digitale tjenester i toppklasse</h1>

			<p>
				Trenger du hjelp til utvikling av eksisterende eller nye produkter på
				nett? Pragmati leverer utvikling/design av nettsider og applikasjoner
				med varierende størrelse og kompleksitet. Vi kan enten utfylle et
				eksisterende team, eller hvis du starter på bar bakke, ta et prosjekt
				fra A til Å.
			</p>

			<CTA />

			<h2>Utvalgte prosjekter</h2>

			<ProjectItem
				title="Plattform for Agder Media"
				description="Sammen med Agder Media sitt team har vi produsert
				applikasjoner og API som forbedrer kjøpsløpet til partneravisenes kunder."
				tags={[
					'React.js',
					'Next.js',
					'Google Firebase',
					'SPA',
					'Serverless',
					'API',
				]}
			/>

			<ProjectItem
				title="Nettbutikk for Lappeteknikk"
				description="Lappeteknikk har blant annet fått utviklet en
				abonnementsløsning med Stripe, og egen integrasjon med Vipps i sin
				nettbutikk."
				tags={[
					'Elixir',
					'Phoenix',
					'Vipps',
					'Stripe',
					'abonnement',
					'Mailchimp',
					'Docker',
				]}
			/>

			<ProjectItem
				title="Festivalside for Naustvikafestivalen"
				description="Vi utviklet en designprofil til bruk i markedsføring og
				annet grafisk materiell, i tillegg til en fersk nettside for årets
				festival (2019)."
				tags={[
					'React.js',
					'Gatsby.js',
					'Netlify',
					'JAMstack',
					'CDN',
					'design',
					'logo',
				]}
			/>


			<h2>Slik kan vi hjelpe deg</h2>


			<Grid>
				<GridItem>
					<h3>Konsultering og team supplement</h3>
					<p>
						Vi kan fleksibelt supplementere og jobbe innenfor et eksisterende
						team og arbeidsmetodikk.
					</p>
				</GridItem>

				<GridItem>
					<h3>Utvikling fra grunnen av</h3>
					<p>
						For nye prosjekter kan vi stå for design, programmering, drift,
						vedlikehold, og mer.
					</p>
				</GridItem>
			</Grid>

			<CTA />
		</Layout>
	);
}

export default Index;
