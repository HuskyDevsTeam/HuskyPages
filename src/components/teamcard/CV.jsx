import React from 'react'

function CV({CV}) {
  return (
		<div className="card__cv">
			<a href={CV} download>
				CV
			</a>
		</div>
	)
}

export default CV