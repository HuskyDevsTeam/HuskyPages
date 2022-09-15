import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs"

function HeaderSocials() {
  return (
		<div className="header__socials">
			<a href="http://linkedin.com" target="_blank">
				<BsLinkedin />
			</a>
			<a href="http://github.com" target="_blank">
				<FaGithub />
			</a>
			<a href="http://instagram.com" target="_blank">
				<BsInstagram />
			</a>
			<a href="http://facebook.com" target="_blank">
				<BsFacebook />
			</a>
		</div>
	)
}

export default HeaderSocials