import React from 'react';
import Button from './button';
import classNames from './contact-form.module.css';

function Input({ label, ...props }) {
	return (
		<label className={classNames.label}>
			{label}
			<input className={classNames.input} {...props} />
		</label>
	);
}

function Textarea({ label, ...props }) {
	return (
		<label className={classNames.label}>
			{label}
			<textarea className={classNames.input} {...props} />
		</label>
	);
}

function ContactForm() {
	return (
		<>
			<p>
				Fortell oss litt om hvem du er og hvordan vi kan hjelpe deg. Fyll ut
				skjemaet under eller ta kontakt via{' '}
				<a href="mailto:hi@pragmati.no?subject=Henvendelse fra pragmati.no">
					hi@pragmati.no
				</a>
				.
			</p>

			<form name="contact" method="POST" action="/kontakt-sendt" data-netlify="true">
				<Input
					label="Ditt navn"
					type="text"
					name="name"
					placeholder="Kari-Ola Nordmann..."
					required
				/>
				<Input
					label="Din epost"
					type="email"
					name="email"
					placeholder="epost@eksempel.no"
					required
				/>
				<Textarea
					label="Hva trenger du hjelp med?"
					rows="4"
					name="description"
					placeholder="Jeg trenger hjelp med..."
					required
				/>
				<Button type="submit">Send inn</Button>
			</form>
		</>
	);
}

export default ContactForm;
