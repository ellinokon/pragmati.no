import React, { useState } from 'react';
import Button from './button';
import fetch from 'cross-fetch';
import classNames from './contact-form.module.css';

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}

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
	const defaultState = {
		description: '',
		email: '',
		name: '',
	};
	const [state, setState] = useState(defaultState);

	function handleChange(e) {
		setState({ ...state, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		const form = e.target;

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...state,
			}),
		})
			.then(() => {
				setState(defaultState);
				alert('Takk for din henvendelse');
			})
			.catch(error => alert(error));
	}

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

			<form
				name="contact"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit={handleSubmit}
			>
				<input type="hidden" name="form-name" value="contact" />
				<Input
					label="Ditt navn"
					type="text"
					name="name"
					value={state.name}
					placeholder="Kari-Ola Nordmann..."
					required
					onChange={handleChange}
				/>
				<Input
					label="Din epost"
					type="email"
					name="email"
					value={state.email}
					placeholder="epost@eksempel.no"
					required
					onChange={handleChange}
				/>
				<Textarea
					label="Hva trenger du hjelp med?"
					rows="4"
					name="description"
					value={state.description}
					placeholder="Jeg trenger hjelp med..."
					required
					onChange={handleChange}
				/>
				<Button type="submit">Send inn</Button>
			</form>
		</>
	);
}

export default ContactForm;
