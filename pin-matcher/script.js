// Code Generator Button

let codeGeneratorBtn = document.getElementById('codeGeneratorBtn')
codeGeneratorBtn.addEventListener('click', function () {
    
    let generateCode = document.getElementById('generate-code')
    randomCode = Math.floor(1000 + Math.random() * 9000)
    generateCode.value = randomCode

    // Time Counter Start
    let timerCounter = setInterval(() => {
        updateCountdown()
        disableButton(true, 'codeGeneratorBtn')
    }, 1000)

    //clearInterval(timerCounter);

    setTimeout(function () {
        clearInterval(timerCounter)
        codeGeneratorBtn.disabled = false
        codeGeneratorBtn.style.backgroundColor = "#495BC3"
        location.reload()
    }, 34000);

    //submit button enable
    disableButton(false, 'matchButton')
})

//Number Pad Append Number to show 

const numberButtons = document.querySelectorAll('[data-number]')
numberButtons.forEach(button => {
    button.addEventListener("click", function () {
        let appendNumber = button.innerText
        let appendNumberString = appendNumber.toString()
        let appendNumberValue = document.getElementById('numberPadDisplay').value
        appendNumberValue = appendNumberValue + appendNumberString
        document.getElementById('numberPadDisplay').value = appendNumberValue.substring(0, 4)
    })
});

// Clear Button to Clear Display

const clearButton = document.querySelector('[data-clear]')
clearButton.addEventListener("click", function () {
    document.getElementById('numberPadDisplay').value = ''
})

// Delete button to delete single value

const delButton = document.querySelector('[data-backspce]')
delButton.addEventListener("click", function () {
    let delButton = document.getElementById('numberPadDisplay').value
    let deleting = delButton.slice(0, -1)
    document.getElementById('numberPadDisplay').value = deleting
})

// Match Code - Check Code is Matched or not

let matchButton = document.getElementById('matchButton')
matchButton.addEventListener("click", matchButtonFn)
let count = 3

function matchButtonFn() {
    let generateCode = document.getElementById('generate-code').value
    let appendNumberValue = document.getElementById('numberPadDisplay').value

    if (generateCode == '' && appendNumberValue == '') {
        alert("First Generate Code & Try to Match")
        return
    } else if (generateCode === appendNumberValue) {
        notification(true)
        /* document.getElementById('generate-code').value = ''
        document.getElementById('numberPadDisplay').value = '' */
        document.getElementById('tryCountLine').style.display = "none"
    } else {
        notification(false)
    }

    // Click Counter with Logic
    count -= 1
    let tryCount = document.getElementById('tryCount')
    tryCount.innerHTML = count;
    if (count == 0) {
        disableButton(true, 'matchButton')
        tryCount.innerHTML = "No";
    }

}

// disable submit button

function disableButton(Isdisable, buttonId) {
    if (Isdisable == true) {
        let button = document.getElementById(buttonId)
        button.disabled = true
        button.style.backgroundColor = "#22223e"
    } else if (Isdisable == false) {
        let button = document.getElementById(buttonId)
        button.disabled = false
        button.style.backgroundColor = "#495BC3"
    }
}



// disable notification

function notification(match) {
    const notify = document.getElementsByClassName('notify')
    if (match == true) {
        notify[1].style.display = "block"
        notify[0].style.display = "none"
    } else {
        notify[0].style.display = "block"
        notify[1].style.display = "none"
    }
}

//countdown timer

let startingMinutes = .5

let time = startingMinutes * 60
let countDownElement = document.getElementById('countdown')
let tryleft = document.getElementById('tryleft')

function updateCountdown() {
    countDownElement.style.display = 'block'
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    countDownElement.innerHTML = `${minutes}:${seconds}`
    if (time > 0) {
        time--
    }

    //console.log(minutes, seconds, startingMinutes)


    if (countDownElement.innerText == '0:00') {
        disableButton(true, 'matchButton')
        tryleft.style.display = 'none'
        tryCount.innerText = "No Time Left";

    }
}