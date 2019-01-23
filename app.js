var userScore = 0
var computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const message_p = document.getElementById("action-message")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
const smallUserWord = "user".fontsize(3).sup()
const smallCompWord = "comp".fontsize(3).sup()



function getComputerChoice() {
  const choices = ['r','p','s']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

function convertLetterToWord(letter){
  if (letter === 'r') return "Rock"
  if (letter === 'p') return "Paper"
  return "Scissors"
}

function win(userChoice, computerChoice) {
  userScore ++
  userScore_span.innerHTML = userScore
  result_p.innerHTML = `${convertLetterToWord(userChoice)}${smallUserWord} beats ${convertLetterToWord(computerChoice)}${smallCompWord}`
  message_p.innerHTML = "You Win!"
  const userChoice_div = document.getElementById(userChoice)
  userChoice_div.classList.add('green-glow')
  setTimeout( () => userChoice_div.classList.remove('green-glow'),300)
}

function lose(userChoice, computerChoice) {
  computerScore ++
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertLetterToWord(userChoice)}${smallUserWord} loses to ${convertLetterToWord(computerChoice)}${smallCompWord}`
  message_p.innerHTML = "You Lose!"
  const userChoice_div = document.getElementById(userChoice)
  userChoice_div.classList.add('red-glow')
  setTimeout( () => userChoice_div.classList.remove('red-glow'),300)

}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertLetterToWord(userChoice)}${smallUserWord} equals ${convertLetterToWord(computerChoice)}${smallCompWord}`
  message_p.innerHTML = "It is a Draw!"
  const userChoice_div = document.getElementById(userChoice)
  userChoice_div.classList.add('grey-glow')
  setTimeout( () => userChoice_div.classList.remove('grey-glow'),300)

}

function game(userChoice){
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice)
      break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice)
      break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice)
    break;
  }
}

function main(){
  rock_div.addEventListener('click', () => game("r"))

  paper_div.addEventListener('click', () => game("p"))

  scissors_div.addEventListener('click', () => game("s"))
}

main()
