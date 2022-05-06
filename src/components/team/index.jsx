import React from "react"
import "./styles.css"
import Teamcard from "../teamcard"

function Team() {
	const WORKERS = [
		{
			title: "Chemi Martínez",
			subtitle: "Fullstack Developer",
			description:
				"Tengo 26 años, venezolano, me encanta el futbol, los videojuegos y la música, siempre estoy buscando cosas que aprender",
			image: "img/chemi.png",
			cv: "docs/chemi.pdf",
			strengs: ["Python", "ReactJS", "Django", "Laravel", "NodeJS"],
			socials: [
				{ name: "facebook", url: "https://facebook.com/chemi.martinez.3" },
				{ name: "instagram", url: "https://instagram.com/chemimartinez10" },
				{ name: "github", url: "https://github.com/chemimartinez10" },
			],
			color: "#ff9616",
			subcolor: "#b80c00",
		},
		{
			title: "Luis Vásquez",
			subtitle: "Frontend Developer",
			description:
				"Tengo 26 años, venezolano, me encanta el futbol, los videojuegos y la música, siempre estoy buscando cosas que aprender",
			image: "img/luis.png",
			cv: "docs/luis.pdf",
			strengs: ["Bootstrap", "VueJS", "CSS", "UX Design", "UI Design"],
			socials: [
				{ name: "facebook", url: "https://facebook.com/chemi.martinez.3" },
				{ name: "github", url: "https://github.com/chemimartinez10" },
				{ name: "linkedin", url: "https://linkedin.com/" },
			],
			color: "#1696ff",
			subcolor: "#0022b8",
		},
		{
			title: "Manuel Farias",
			subtitle: "Fullstack Developer",
			description:
				"Tengo 26 años, venezolano, me encanta el futbol, los videojuegos y la música, siempre estoy buscando cosas que aprender",
			image: "img/manu.png",
			cv: "docs/manu.pdf",
			strengs: ["Python", "Angular", "C#", ".NET", "Xamarin"],
			socials: [
				{ name: "instagram", url: "https://instagram.com/chemimartinez10" },
				{ name: "github", url: "https://github.com/chemimartinez10" },
				{ name: "linkedin", url: "https://linkedin.com/" },
			],
			color: "#16ff77",
			subcolor: "#25b800",
		},
	]
	return (
		<section id="team">
			<h5>Meet our family</h5>
			<h2>Team</h2>
			<div className="team__container">
				{WORKERS.map(
					({
						title,
						subtitle,
						description,
						image,
						cv,
						strengs,
						socials,
						color,
						subcolor,
					}) => (
						<Teamcard
							key={title}
							title={title}
							subtitle={subtitle}
							description={description}
							image={image}
							cv={cv}
							strengs={strengs}
							socials={socials}
							color={color}
							subcolor={subcolor}
						/>
					)
				)}
			</div>
		</section>
	)
}

export default Team
