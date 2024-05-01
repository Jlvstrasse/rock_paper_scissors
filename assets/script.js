const timerEl= document.getElementById('countdown')
const startButton = document.getElementById('start-button')
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');



//get user choice by clicking picture

let userChoice = null;

rockButton.addEventListener('click', function() {
    setUserChoice('Rock');
    countdown();
});

paperButton.addEventListener('click', function() {
    setUserChoice('Paper');
    countdown();
});

scissorsButton.addEventListener('click', function() {
    setUserChoice('Scissors');
    countdown();
});

function setUserChoice(choice) {
    userChoice = choice;
    console.log('User choice:', userChoice);
}

// Function to open the modal
function openModal(userChoice, computerChoice, result) {
    const modal = document.getElementById('resultModal');
    const userChoiceElement = document.getElementById('userChoice');
    const computerChoiceElement = document.getElementById('computerChoice');
    const modalResult = document.getElementById('modalResult');
    
    // Set the content of modal elements
    userChoiceElement.textContent = 'Your Choice: ' + userChoice;
    computerChoiceElement.textContent = 'Computer Choice: ' + computerChoice;
    modalResult.textContent = 'Result: ' + result;
  
    // Display the modal
    modal.style.display = 'block';
  }
  
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'none';

    location.reload();
}
  

  // Add event listener to close button
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

// Add event listener to modal overlay to close when clicked outside
const modal = document.getElementById('resultModal');
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

function countdown() {  
    let timeLeft = 4
    const timeInterval = setInterval(function () {
        if (timeLeft === 4) {
          timerEl.textContent = `Rock!`;
          timeLeft--;
        } else if (timeLeft === 3) {
          timerEl.textContent = `Paper!`;
          timeLeft--;
        } else if (timeLeft === 2) {
            timerEl.textContent = `Scissors!`;
            timeLeft--;  
        } else if (timeLeft === 1) {
            timerEl.textContent = `Shoot!`;
            timeLeft--;
        } else if (timeLeft === 0) {
            timerEl.textContent = ``
          const computerChoice = getComputerChoice();
          const result = determineWinner(userChoice, computerChoice);
          openModal(userChoice, computerChoice, result);
        }
      }, 1000);
    }


  
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
  
    switch (randomNum) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
    return 'Its a tie!'
    }
  
    if (userChoice === 'Rock')
      if (computerChoice === 'Paper') {
      return 'You Lost'
    } else {
      return 'You Won!'
    } 
    if (userChoice === 'Paper')
      if (computerChoice === 'Rock') {
      return 'You Lost'
    } else {
      return 'You Won!'
    } 
    if (userChoice === 'Scissors')
      if (computerChoice === 'Paper') {
      return 'You Lost'
    } else {
      return 'You Won!'
    }
    
  }
  