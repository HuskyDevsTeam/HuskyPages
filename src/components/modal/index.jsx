import React, { Children } from 'react'
import { ReactDOM } from 'react'
import Modal from "react-modal"

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
        borderRadius: "8px"
	},
}
Modal.defaultStyles.overlay.backgroundColor = "#0006"
Modal.defaultStyles.overlay.backdropFilter = "blur(3px)"
Modal.defaultStyles.overlay.zIndex = "99999"
Modal.setAppElement("#root")

export default function ModalCustom({children, background, ids}) {
	Modal.defaultStyles.content.background = background
	const [modalIsOpen, setIsOpen] = React.useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<div>
			<a className="btn btn-primary" onClick={openModal}>
				Let's play
			</a>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Game-modal"
			>
                {children}
			</Modal>
		</div>
	)
}
