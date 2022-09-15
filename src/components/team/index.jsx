import React from "react"
import "./styles.css"
import Teamcard from "../teamcard"

function Team() {
	const WORKERS = [
		{
			title: "Chemi Martínez",
			subtitle: "Fullstack Developer",
			description:
				"26 years old, Web developer focused on improve everyday. Loving soccer, videogames, coding and cook.",
			image: "img/chemi.png",
			cv: "docs/chemi.pdf",
			strengs: ["Python", "ReactJS", "Django", "Laravel", "NodeJS"],
			socials: [
				{
					name: "linkedin",
					url: "https://www.linkedin.com/in/chemi-martinez-ff9616/",
				},
				{ name: "instagram", url: "https://instagram.com/chemimartinez10" },
				{ name: "github", url: "https://github.com/chemimartinez10" },
			],
			color: "#ff9616",
			subcolor: "#b80c00",
		},
		{
			title: "Luis Vásquez",
			subtitle: "Frontend Developer",
			description: "26. Systems engineer. Living one day at a time.",
			image: "img/luis.png",
			strengs: ["Bootstrap", "VueJS", "CSS", "UX Design", "UI Design"],
			socials: [
				{ name: "linkedin", url: "https://linkedin.com/" },
				{ name: "facebook", url: "https://facebook.com/chemi.martinez.3" },
				{ name: "github", url: "https://github.com/chemimartinez10" },
			],
			color: "#1696ff",
			subcolor: "#0022b8",
		},
		{
			title: "Manuel Farias",
			subtitle: "Fullstack Developer",
			description:
				"Software engineer with a fascination for solving and optimizing solutions",
			image: "img/manuel.png",
			strengs: ["Python", "Angular", "C#", ".NET", "Xamarin"],
			socials: [
				{ name: "linkedin", url: "https://linkedin.com/" },
				{ name: "instagram", url: "https://instagram.com/chemimartinez10" },
				{ name: "github", url: "https://github.com/chemimartinez10" },
			],
			color: "#16ee66",
			subcolor: "#25aa00",
		},
		{
			title: "Karen Cabello",
			subtitle: "Graphic designer",
			description:
				"I'm a 26 year old freelancer, I focus mainly on photo and cartoon editing. I enjoy spending time researching about design, cooking new recipes and watching movies.",
			image: "img/karen.png",
			cv: "docs/karen.pdf",
			strengs: [
				"Adobe suite",
				"Creative design",
				"Social media management",
				"UI Design",
			],
			socials: [
				{ name: "linkedin", url: "https://facebook.com/chemi.martinez.3" },
				{ name: "instagram", url: "https://instagram.com/chemimartinez10" },
			],
			color: "#9a43e8",
			subcolor: "#8339c7",
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
