import React, { useState, useEffect } from "react"
import "./styles.css"
import { AiOutlineHome, AiOutlineUser, AiOutlineTeam, AiOutlineTool } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

function Nav() {
	const touchBegin = (e) => {
		e.target.classList.add("onhover")
	}
	const touchEnd = (e) => {
		e.target.classList.remove("onhover")
	}
	useEffect(() => {
		const measureHeader = document.querySelector("header")
		const measureAbout = document.querySelector("#about")
		const measureExperience = document.querySelector("#experience")
		const measureServices = document.querySelector("#services")
		const measurePortfolio = document.querySelector("#portfolio")
		const measureTeam = document.querySelector("#team")
		const measureTestimonials = document.querySelector("#testimonials")
		const measureContact = document.querySelector("#contact")
		const scrollFunc = () => {
			const intersection = (entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.id == "header") {
						setActiveNav("#")
					}
					if (entry.isIntersecting && entry.target.id == "product") {
						setActiveNav("#product")
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
				threshold: 0.4,
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
	const [activeNav, setActiveNav] = useState("#")
	return (
		<nav>
			<a
				href="#"
				className={activeNav === "#" ? "active" : ""}
				onTouchStart={touchBegin}
				onTouchEnd={touchEnd}
				onMouseOver={touchBegin}
				onMouseLeave={touchEnd}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#product"
				className={activeNav === "#product" ? "active" : ""}
				onTouchStart={touchBegin}
				onTouchEnd={touchEnd}
				onMouseOver={touchBegin}
				onMouseLeave={touchEnd}
			>
				<AiOutlineTool />
			</a>
			<a
				href="#experience"
				className={activeNav === "#experience" ? "active" : ""}
				onTouchStart={touchBegin}
				onTouchEnd={touchEnd}
				onMouseOver={touchBegin}
				onMouseLeave={touchEnd}
			>
				<BiBook />
			</a>
			<a
				href="#services"
				className={activeNav === "#services" ? "active" : ""}
				onTouchStart={touchBegin}
				onTouchEnd={touchEnd}
				onMouseOver={touchBegin}
				onMouseLeave={touchEnd}
			>
				<RiServiceLine />
			</a>
			<a
				href="#team"
				className={activeNav === "#team" ? "active" : ""}
				onTouchStart={touchBegin}
				onTouchEnd={touchEnd}
				onMouseOver={touchBegin}
				onMouseLeave={touchEnd}
			>
				<AiOutlineTeam />
			</a>
			<a
				href="#contact"
				className={activeNav === "#contact" ? "active" : ""}
				onTouchStart={touchBegin}
				onTouchEnd={touchEnd}
				onMouseOver={touchBegin}
				onMouseLeave={touchEnd}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	)
}

export default Nav
