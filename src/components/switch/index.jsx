import React, { useContext } from "react"
import ThemeContext from "../../context/Context"
import { BsSunFill, BsMoonFill } from "react-icons/bs"
import { Global } from "@emotion/react"
import './styles.css'

function Switch() {
	const {day, style, changeTheme} = useContext(ThemeContext)

	return (
        <div className={day ? "switch day" : "switch"} onClick={changeTheme}>
            <Global styles={{':root':style}}/>
			<div>{day ? <BsSunFill /> : <BsMoonFill />}</div>
		</div>
	)
}

export default Switch
