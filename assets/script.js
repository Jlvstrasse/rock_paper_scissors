const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissosrs"
    )
      return userInput;
    else {
        console.log("Error");
    } 
  };
  
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
  
    switch (randomNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
    return 'Its a tie!'
    }
  
    if (userChoice === 'rock')
      if (computerChoice === 'paper') {
      return 'You Lost'
    } else {
      return 'You Won!'
    } 
    if (userChoice === 'paper')
      if (computerChoice === 'rock') {
      return 'You Lost'
    } else {
      return 'You Won!'
    } 
    if (userChoice === 'scissors')
      if (computerChoice === 'paper') {
      return 'You Lost'
    } else {
      return 'You Won!'
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock')
    const computerChoice = getComputerChoice()
  
    console.log(userChoice)
    console.log(computerChoice)
  
    console.log(determineWinner(userChoice, computerChoice))
  }
    playGame()