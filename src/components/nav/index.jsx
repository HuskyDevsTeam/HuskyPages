import React, {useState, useEffect} from "react"
import "./styles.css"
import { AiOutlineHome, AiOutlineUser, AiOutlineTeam } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

function Nav() {
	useEffect(()=>{
		const measureHeader = document.querySelector('header')
		const measureAbout = document.querySelector('#about')
		const measureExperience = document.querySelector('#experience')
		const measureServices = document.querySelector('#services')
		const measurePortfolio = document.querySelector('#portfolio')
		const measureTeam = document.querySelector('#team')
		const measureTestimonials = document.querySelector('#testimonials')
		const measureContact = document.querySelector('#contact')
		const scrollFunc = () => {
			const intersection = (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.id == "header") {
						setActiveNav("#")
					}
					if (entry.isIntersecting && entry.target.id == "about") {
						setActiveNav("#about")
					}
					if (entry.isIntersecting && entry.target.id == "experience") {
						setActiveNav("#experience")
					}
					if (entry.isIntersecting && entry.target.id == "services") {
						setActiveNav("#services")
					}
					if (entry.isIntersecting && entry.target.id == "portfolio") {
						setActiveNav("#services")
					}
					if (entry.isIntersecting && entry.target.id == "team") {
						setActiveNav("#team")
					}
					if (entry.isIntersecting && entry.target.id == "testimonials") {
						setActiveNav("#team")
					}
					if (entry.isIntersecting && entry.target.id == "contact") {
						setActiveNav("#contact")
					}
				})
			}
			const observer = new IntersectionObserver(intersection, {
				root: null,
				rootMargin: "0px",
				threshold: 0.15,
			})
			observer.observe(measureHeader)
			observer.observe(measureAbout)
			observer.observe(measureExperience)
			observer.observe(measureServices)
			observer.observe(measurePortfolio)
			observer.observe(measureTeam)
			observer.observe(measureTestimonials)
			observer.observe(measureContact)
		}
		scrollFunc()
		window.addEventListener("resize", scrollFunc)
	}, [])
	const [activeNav, setActiveNav] = useState('#')
	return (
		<nav>
			<a
				href="#"
				className={activeNav === "#" ? "active" : ""}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				className={activeNav === "#experience" ? "active" : ""}
			>
				<BiBook />
			</a>
			<a
				href="#services"
				className={activeNav === "#services" ? "active" : ""}
			>
				<RiServiceLine />
			</a>
			<a
				href="#team"
				className={activeNav === "#team" ? "active" : ""}
			>
				<AiOutlineTeam />
			</a>
			<a
				href="#contact"
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	)
}

export default Nav
