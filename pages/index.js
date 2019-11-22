import React from 'react';
import Layout from '../components/layout';
import CTA from '../components/cta';
import ProjectItem from '../components/project-item';
import Grid, { GridItem } from '../components/grid';

function Index() {
	return (
		<Layout>
			<h1>Vi utvikler interaktive digitale tjenester i toppklasse</h1>

			<p>
				Trenger du hjelp til utvikling av eksisterende eller nye produkter på
				nett? Pragmati leverer utvikling/design av nettsider og applikasjoner
				med varierende størrelse og kompleksitet. Vi kan enten utfylle et
				eksisterende team, eller hvis du starter på bar bakke, ta et prosjekt
				fra A til Å.
			</p>



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





			<h2>Slik kan vi hjelpe deg</h2>



			<Grid>
				<GridItem>
					<h3>Konsultering og team supplement</h3>
					<p>
						Vi kan fleksibelt supplementere og jobbe innenfor et eksisterende team
						og arbeidsmetodikk.
					</p>
				</GridItem>

				<GridItem>
					<h3>Utvikling fra grunnen av</h3>
					<p>
						For nye prosjekter kan vi stå for design, programmering, drift, og
						vedlikehold.
					</p>
				</GridItem>
			</Grid>


		</Layout>
	);
}

export default Index;