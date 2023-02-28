import React, { useState, useEffect,useLayoutEffect } from "react"

const Context = React.createContext({})
const dayTheme = {
    day:true,
    style:{
        "--color-bg": "#fff",
        "--color-nav": "#ccc3",
        "--color-nav-f": "#ddd8",
        "--color-bg-variant": "#eeec",
        "--color-primary": "#1696ff",
        "--color-primary-variant": "#0022b860",
        "--color-white": "#111",
        "--color-light": "rgba(0 , 0, 0, 0.6)",
        "--color-shadow": "rgba(0, 0, 0, 0.3)",
    }
}
const nightTheme = {
    day: false,
	style: {
        "--color-bg": "#111",
        "--color-nav": "#3332",
        "--color-nav-f": "#3339",
		"--color-bg-variant": "#0009",
		"--color-primary": "#1696ff",
		"--color-primary-variant": "#0022b860",
		"--color-white": "#fff",
		"--color-light": "#eeec",
		"--color-shadow": "rgba(255, 255, 255, 0.1)",
	},
}

export function ThemeContextProvider({ children }) {

    useLayoutEffect(()=>{
        let theme = localStorage.getItem('huskyTheme')
        if(!theme){
            localStorage.setItem('huskyTheme', 'day')
        }
        if(theme === 'day'){
            setDay(dayTheme)
        }
        if(theme === 'night'){
            setDay(nightTheme)
        }
    },[])
    
	const [day, setDay] = useState(dayTheme)
    const changeTheme = ()=>{
        if (day === dayTheme){
            setDay(nightTheme)
            localStorage.setItem('huskyTheme', 'night')
            
        }
        if(day === nightTheme){
            setDay(dayTheme)
            localStorage.setItem('huskyTheme', 'day')
        }
    }
	return <Context.Provider value={{ day:day.day, style:day.style, changeTheme }}>{children}</Context.Provider>
}

export default Context
