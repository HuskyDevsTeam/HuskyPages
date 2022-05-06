import React from "react";
import HeaderSocials from "./HeaderSocials";
import CV from "./CV";
import './styles.css'

function Teamcard ({title, subtitle, description, image, strengs, socials, cv, color, subcolor}){
    return (
			<article
				className="card"
				style={{
					"--color-primary": color,
					"--color-primary-variant": subcolor,
				}}
			>
				<div className="card__header">
                    <HeaderSocials socials={socials}/>
                    <CV CV={cv}/>
					<div className="card__img-container">
						<img src={image} alt="me profile picture" />
					</div>
				</div>
				<div className="card__content">
					<div className="card__title">
						<h3>{title}</h3>
						<small>{subtitle}</small>
					</div>
					<div className="card__separator"></div>
					<p>{description}</p>
					<div className="card__separator"></div>
					<small>Se destaca en</small>
					<ul>
						{strengs.map((topic) => (
							<li key={topic}>{topic}</li>
						))}
					</ul>
				</div>
			</article>
		)
}

export default Teamcard