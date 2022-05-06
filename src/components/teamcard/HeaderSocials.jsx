import React from "react"
import { FaGithub } from "react-icons/fa"
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs"

function HeaderSocials({ socials = [] }) {
	const selectIcon = (name) => {
		let icon = null
		if(name === "facebook")icon = <BsFacebook/>
		if(name === "github")icon = <FaGithub/>
		if(name === "instagram")icon = <BsInstagram/>
		if(name === "linkedin")icon = <BsLinkedin />

		return icon
	}
	const renderSocials = (socials) => {
		if (Array.isArray(socials)) {
			return socials.map(({name, url}) =>(<a key={name+url} href={url} target="_blank">
				{selectIcon(name)}
			</a>)
			)
		}
	}
	return (
		<div className="card__socials">
			{renderSocials(socials)}
		</div>
	)
}

export default HeaderSocials
