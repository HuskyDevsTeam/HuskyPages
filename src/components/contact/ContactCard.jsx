import React from 'react'
import './ContactCard.css'

function ContactCard({
	Icon,
	color = "#1696ff",
	subcolor = "#0022b8",
	name,
	username,
	url,
}) {
	return (
		<article
			className="contact__option"
			style={{ "--color-primary": color, "--color-primary-variant": subcolor }}
		>
			<Icon className="contact__option-icon" />
			<h4>{name}</h4>
			<h5>{username}</h5>
			<a href={url} target="_blank">
				Send a message
			</a>
		</article>
	)
}

export default ContactCard