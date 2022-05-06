import React, { useRef } from "react"
import "./styles.css"
import ContactCard from "./ContactCard"
import { MdMailOutline } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "@emailjs/browser"

function Contact() {
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault()
		emailjs
			.sendForm(
				"service_653f1zh",
				"template_rm31o0h",
				form.current,
				"-aU5Cf4efrlcJ4GqX"
			)
			.then(
				(result) => {
					// console.log(result.text)
					if (result.text === "OK") {
						e.target.reset()
					}
				},
				(error) => {
					console.log(error.text)
				}
			)
	}

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Us</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<ContactCard
						Icon={MdMailOutline}
						color="#ff9616"
						subcolor="#b80c00"
						name="Email"
						username="chemimartinez10@gmail.com"
						url="mailto:chemimartinez10@gmail.com"
					/>
					<ContactCard
						Icon={RiMessengerLine}
						color="#1696ff"
						subcolor="#0022b8"
						name="Messenger"
						username="chemi.martinez.3"
						url="https://m.me/chemi.martinez.3"
					/>
					<ContactCard
						Icon={BsWhatsapp}
						color="#16ee66"
						subcolor="#25aa00"
						name="Whatsapp"
						username="(+58) 412-081-9758"
						url="https://api.whatsapp.com/send?phone=+584120819758"
					/>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="from_name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="reply_to"
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
