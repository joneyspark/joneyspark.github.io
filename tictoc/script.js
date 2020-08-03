const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
let circelTurn

const WINING_COMBINATION = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],

]

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')
const winingMessageTextElements = document.querySelector('[data-wining-message]')
const winingMessageElements = document.getElementById('winingMsg')
const restartButton = document.getElementById('restartBtn')

startGames()

restartButton.addEventListener("click", startGames)

function startGames(){
	let circelTurn = false
	cellElements.forEach(cell => {
		cell.classList.remove(X_CLASS)
		cell.classList.remove(CIRCLE_CLASS)
		cell.removeEventListener('click', handleClick)
		cell.addEventListener('click', handleClick, {once: true})
	})
	winingMessageElements.classList.remove('show')
	setBoardHoverClass()
}

function handleClick(e){
	const cell = e.target
	const currentClass = circelTurn ? CIRCLE_CLASS : X_CLASS
	//console.log(currentClass)
	paceMark(cell, currentClass)

	if(checkWins(currentClass)){
		endGame(false)
	}else if (isDraw()) {
		endGame(true)
	}else {
		swapTurns()
		setBoardHoverClass()
	}
	//Check for win
	//Check for Draw
	//Switch Turns

}
function endGame(draw){
 if(draw){
 	winingMessageTextElements.innerText = `Draw`
	}
	else {
		winingMessageTextElements.innerText = `${circelTurn ? "O's" : "X's"} Wins!`
	}
winingMessageElements.classList.add('show')

}

function isDraw(){
	return [...cellElements].every(cell => {
		return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
	})
}


function paceMark(cell, currentClass){
	cell.classList.add(currentClass)
}

function swapTurns(){
	circelTurn = !circelTurn
}

function setBoardHoverClass() {
	board.classList.remove(X_CLASS)
	board.classList.remove(CIRCLE_CLASS)
	if(circelTurn){
		board.classList.add(CIRCLE_CLASS)
	}else {
		board.classList.add(X_CLASS)
	}
}

function checkWins(currentClass){
	return WINING_COMBINATION.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}