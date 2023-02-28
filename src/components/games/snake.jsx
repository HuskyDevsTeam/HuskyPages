import { useRef, useState, useEffect } from "react"
import "./styles.css"
import {
	AiOutlineArrowUp,
	AiOutlineArrowRight,
	AiOutlineArrowLeft,
	AiOutlineArrowDown,
} from "react-icons/ai"

function Snake() {
	//variables del juego
	const clientWidth = useRef(window.innerWidth)
	const SIZE = clientWidth.current > 800 ? 30 : 20
	const score = useRef(0)
	const maxScore = useRef(localStorage.getItem("snake-max-score") || 0)
	const [pause, setPause] = useState(false)
	const [snake, setSnake] = useState([{ headX: 10, headY: 20 }])
	const [headX, setHeadX] = useState(10)
	const [headY, setHeadY] = useState(20)
	const [screenText, setText] = useState("")
	const velocity = useRef({ X: 0, Y: 0 })
	const lastVelocity = useRef({ X: 0, Y: 0 })
	const [fruitX, setFruitX] = useState(Math.floor(Math.random() * SIZE) + 1)
	const [fruitY, setFruitY] = useState(Math.floor(Math.random() * SIZE) + 1)

	//funciones
	function changePosition() {
		let x = Math.floor(Math.random() * SIZE) + 1
		let y = Math.floor(Math.random() * SIZE) + 1
		while (snake.some(({ headX, headY }) => x === headX && y === headY)) {
			x = Math.floor(Math.random() * SIZE) + 1
			y = Math.floor(Math.random() * SIZE) + 1
		}
		setFruitX(x)
		setFruitY(y)
	}
    const eventMoveSnake = (e) => {
			e.preventDefault()
			moveSnake(e)
		}
	function moveSnake(e) {

		if (e.key === "ArrowUp" && velocity.current.Y === 0 && !pause) {
			velocity.current = { X: 0, Y: -1 }
			lastVelocity.current = { X: 0, Y: -1 }
		}
		if (e.key === "ArrowLeft" && velocity.current.X === 0 && !pause) {
			velocity.current = { X: -1, Y: 0 }
			lastVelocity.current = { X: -1, Y: 0 }
		}
		if (e.key === "ArrowDown" && velocity.current.Y === 0 && !pause) {
			velocity.current = { X: 0, Y: 1 }
			lastVelocity.current = { X: 0, Y: 1 }
		}
		if (e.key === "ArrowRight" && velocity.current.X === 0 && !pause) {
			velocity.current = { X: 1, Y: 0 }
			lastVelocity.current = { X: 1, Y: 0 }
		}
		if (e.code === "Space") {
			if (pause) {
				velocity.current.X = lastVelocity.current.X
				velocity.current.Y = lastVelocity.current.Y
                setText("")
				setPause(false)
			} else {
				velocity.current = { X: 0, Y: 0 }
				setPause(true)
			}
		}
	}
	function saveMaxScore() {
		localStorage.setItem("snake-max-score", score.current)
		return score.current
	}
	function isDead() {
		if (headX <= 0 || headX >= SIZE + 1 || headY <= 0 || headY >= SIZE + 1) {
			maxScore.current =
				score.current >= maxScore.current ? saveMaxScore() : maxScore.current
			resetGame()
		}
	}
	function alreadyAte() {
		if (headX === fruitX && headY === fruitY) {
			score.current++
			setSnake((s) => {
				let temp = s
				temp.push({ headX: fruitX, headY: fruitY })
				return temp
			})
			changePosition()
		}
	}
	function resetGame() {
		setText(`score = ${score.current} pts`)
		score.current = 0
		setHeadX(10)
		setHeadY(20)
		setSnake([{ headX: 10, headY: 20 }])
		changePosition()
		velocity.current = { X: 0, Y: 0 }
		lastVelocity.current = { X: 0, Y: 0 }
		setPause(true)
	}
	function drawGame() {
		setHeadX((old) => old + velocity.current.X)
		setHeadY((old) => old + velocity.current.Y)
		setSnake((old) => {
			for (let j = old.length - 1; j > 0; j--) {
                old[j] = old[j - 1]
			}
			for (let i = 1; i < old.length; i++) {
				if (i >= 3 && headX === old[i].headX && headY === old[i].headY) {
					maxScore.current =
						score.current >= maxScore.current
							? saveMaxScore()
							: maxScore.current
					resetGame()
				}
			}
			old[0] = { headX, headY }
			return old
		})
		alreadyAte()
		isDead()
	}
	useEffect(() => {
		window.addEventListener("keydown", eventMoveSnake)
		return () => {
			window.removeEventListener("keydown", eventMoveSnake)
		}
	}, [pause, setPause])
	useEffect(() => {
		const interval = setInterval(() => {
			if(!pause)drawGame()
		}, 125)
		return () => clearInterval(interval)
	}, [alreadyAte])

	return (
		<div className="contenedor">
			<div
				id="cortina"
				className={pause ? "cortina" : ""}
				onClick={() => {
					moveSnake({ code: "Space" })
				}}
			>
				{screenText && "you have lost :("}
				{screenText && <br />}
				{screenText}
				{screenText && <br />}
				Press space to resume
			</div>
			<div className="score-board">
				<span id="current-score">Score: {score.current}</span>
				<span id="max-score">Max score: {maxScore.current}</span>
			</div>
			<div
				className="play-area"
				style={{ gridTemplate: `repeat(${SIZE}, 1fr)/repeat(${SIZE}, 1fr)` }}
				onClick={() => {
					moveSnake({ code: "Space" })
				}}
			>
				{
					<div
						className="fruit"
						style={{ gridColumn: fruitX, gridRow: fruitY }}
					></div>
				}
				{
					snake.map((part, index) => (
						<div
							className="head"
							key={index}
							style={{ gridColumn: part?.headX, gridRow: part?.headY }}
						></div>
					))
					// <div
					// 	className="head"
					// 	style={{ gridColumn: headX, gridRow: headY }}
					// ></div>
				}
			</div>
			<div className="controls">
				<div className="controls-container">
					<i
						id="arrow-up"
						onClick={() => {
							moveSnake({ key: "ArrowUp" })
						}}
					>
						<AiOutlineArrowUp />
					</i>
				</div>
				<div className="controls-container">
					<i
						id="arrow-left"
						onClick={() => {
							moveSnake({ key: "ArrowLeft" })
						}}
					>
						<AiOutlineArrowLeft />
					</i>
					<i
						id="arrow-down"
						onClick={() => {
							moveSnake({ key: "ArrowDown" })
						}}
					>
						<AiOutlineArrowDown />
					</i>
					<i
						id="arrow-right"
						onClick={() => {
							moveSnake({ key: "ArrowRight" })
						}}
					>
						<AiOutlineArrowRight />
					</i>
				</div>
			</div>
			<div className="legend">
				<p>
					use arrow buttons to move, to pause press spacebar or touch the snake
				</p>
			</div>
		</div>
	)
}

export default Snake
