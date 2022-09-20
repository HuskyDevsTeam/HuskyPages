import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs"

function HeaderSocials() {
  return (
		<div className="header__socials">
			<a href="https://github.com/huskydevteam" target="_blank">
				<FaGithub />
			</a>
			<a href="http://instagram.com/huskydevteam" target="_blank">
				<BsInstagram />
			</a>
			<a href="http://facebook.com/huskydevteam" target="_blank">
				<BsFacebook />
			</a>
		</div>
	)
}

export default HeaderSocials