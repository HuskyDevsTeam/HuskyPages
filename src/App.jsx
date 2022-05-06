import React from "react"
import Nav from "./components/nav/index"
import Header from "./components/header/index"
import Footer from "./components/footer/index"
import About from "./components/about/index"
import Contact from "./components/contact/index"
import Experience from "./components/experience/index"
import Portfolio from "./components/portfolio/index"
import Services from "./components/services/index"
import Team from "./components/team/index"
import Testimonials from "./components/testimonials/index"

function App() {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Portfolio />
			<Services />
			<Team />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	)
}

export default App
