const getComputerChoice = () => {
  const chooseRandom = Math.floor(Math.random() * 3) + 1
  switch (chooseRandom) {
    case 1:
      return 'rock'
    case 2:
      return 'paper'
    case 3:
      return 'scissors'
  }
}

const playRound = (computerChoice, playerSelection) => {
  if (computerChoice === playerSelection) return 'tied!'
  else if (computerChoice === 'rock' && playerSelection === 'scissors') {
    return 'You Lost'
  } else if (computerChoice === 'paper' && playerSelection === 'rock') {
    return 'You Lost'
  }
  if (computerChoice === 'scissors' && playerSelection === 'paper') {
    return 'You Lost'
  } else return 'You Won'
}

const playAgain = () => {
  document.querySelector('.playerScore').textContent = 0
  document.querySelector('.computerScore').textContent = 0
  game()
}

const game = () => {
  let playerScore = 0
  let computerScore = 0
  let rounds = 0

  let playerChoice = document.querySelectorAll('.game-buttons button')
  const finalScore = document.querySelector('.final-score')
  const playAgainBtn = document.querySelector('.play-again-button')
  const results = document.querySelector('.results')

  results.innerHTML = ''
  finalScore.textContent = ''

  const getResults = () => {
    const returnMessage = `The Computer won ${computerScore} rounds and you won ${playerScore} rounds.`

    if (playerScore > computerScore) return `${returnMessage} You win!`
    else if (playerScore > computerScore) return `${returnMessage} You lost!`
    else return `${returnMessage}. The game is Tied!`
  }

  console.log('hi')
  playerChoice.forEach((c) =>
    c.addEventListener('click', (e) => {
      if (rounds === 5) {
        console.log('clicked')
        c.disabled = true
        const finalResults = getResults()
        finalScore.textContent = finalResults
        playAgainBtn.style.display = 'block'
        playAgainBtn.addEventListener('click', () => {
          document.querySelector('.playerScore').textContent = 0
          document.querySelector('.computerScore').textContent = 0
          results.innerHTML = ''
          finalScore.textContent = ''
          playAgainBtn.style.display = 'none'
          playerScore = 0
          computerScore = 0
          rounds = 0
          c.disabled = false
        })
      } else {
        const computerChoice = getComputerChoice()
        let playerSelection = e.target.textContent
        const roundResults = playRound(computerChoice, playerSelection)
        results.innerHTML += `<p>Computer chose ${computerChoice}. ${roundResults}!</p>`
        roundResults === 'You Won'
          ? playerScore++
          : roundResults === 'You Lost'
          ? computerScore++
          : null

        document.querySelector('.playerScore').textContent = playerScore
        document.querySelector('.computerScore').textContent = computerScore
        rounds++
      }
    })
  )
}
game()
