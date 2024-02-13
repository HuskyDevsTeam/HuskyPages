import React from 'react'
import './Card.css'

function Cards({title, subtitle, Icon, isCircle}) {
  return (
	  <article className={isCircle ? "about__card_rounded" : "about__card"}>
			<Icon className="about__icon" />
			<h5>{title}</h5>
			<small>{subtitle}</small>
		</article>
	)
}

export default Cards