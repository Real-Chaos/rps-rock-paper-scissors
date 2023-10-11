// Psuedo code

/* 



1) Create function called getComputerChoice 
  a) returns rock paper or scissors randomly
2) create playRound() function 
  a) takes two parameters: playerSelection and computerSelection
  b) returns a string depending on who wins
3) create game() function
  a) plays 5 rounds
  b) keeps track of scores
  c) at the end of round 5, displays who won

  use prompt() to get players choice 


*/

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

const game = () => {
  let playerScore = 0
  let computerScore = 0
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice()
    const playerSelection = prompt('Choose rock, paper, or scissors')
    const roundResults = playRound(computerChoice, playerSelection)
    roundResults === 'You Won'
      ? playerScore++
      : roundResults === 'You Lost'
      ? computerScore++
      : null
  }

  const returnMessage = `The Computer won ${computerScore} rounds and you won ${playerScore} rounds.`

  if (playerScore > computerScore) return `${returnMessage} You win!`
  else if (playerScore > computerScore) return `${returnMessage} You lost!`
  else return `${returnMessage}. The game is Tied!`
}

console.log(game())
