let userScore = 0;
let computerScore = 0;
var timeout=1000;
var addtime=500;
var rmvtime=2000;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const r1_div =document.getElementById("r1");
const p1_div =document.getElementById("p1");
const s1_div =document.getElementById("s1");
const smallUserWord = "User's".fontsize(20);
const smallCompWord = "Computer's".fontsize(20);

function getComputerChoice() {
    
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
    

}


function convertToWord(letter) {
    if(letter === 'r') return " 'Rock'".fontcolor("yellow");
    if(letter === 'p') return " 'Paper'".fontcolor("yellow");
    return " 'Scissor'".fontcolor("yellow");
}

function win(userChoice, computerChoice){
  switch (userChoice + computerChoice) {
    case "rs": 

    setTimeout(() => {
      s1_div.classList.add('red-glow');
    }, addtime);
    setTimeout(() => {
      s1_div.classList.remove('red-glow');
    }, rmvtime);  break;
    case "sp":
      setTimeout(() => {
        p1_div.classList.add('red-glow');
      }, addtime);
      setTimeout(() => {
        p1_div.classList.remove('red-glow');
      }, rmvtime);  break;
    case "pr":
      setTimeout(() => {
        r1_div.classList.add('red-glow');
      }, addtime);
      setTimeout(() => {
        r1_div.classList.remove('red-glow');
      }, rmvtime);  break;
  
  }
  const useChoice_div = document.getElementById(userChoice);
  setTimeout(() => {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
  }, 700);
  setTimeout(() => {
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} beats ${smallCompWord}${convertToWord(computerChoice)} - `+`  You Win!!!`.fontcolor("blue");
  }, timeout);
  setTimeout(() => useChoice_div.classList.add('green-glow'), addtime);
  setTimeout(() => useChoice_div.classList.remove('green-glow'), rmvtime);
  
}

function lose(userChoice, computerChoice){
  switch (userChoice + computerChoice) {
    case "sr": 
    setTimeout(() => {
      r1_div.classList.add('green-glow');
    }, addtime);
    setTimeout(() => {
      r1_div.classList.remove('green-glow');
    }, rmvtime);  break;
    case "ps":
      setTimeout(() => {
        s1_div.classList.add('green-glow');
      }, addtime);
      setTimeout(() => {
        s1_div.classList.remove('green-glow');
      }, rmvtime);  break;
    case "rp":
      setTimeout(() => {
        p1_div.classList.add('green-glow');
      }, addtime);
      setTimeout(() => {
        p1_div.classList.remove('green-glow');
      }, rmvtime);  break;
  
  }
  const useChoice_div = document.getElementById(userChoice);
  setTimeout(() => {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
  }, 700);
  setTimeout(() => {
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} loses to ${smallCompWord}${convertToWord(computerChoice)} - `+`  You Lost!!!`.fontcolor("red");
  }, timeout);
  setTimeout(() => useChoice_div.classList.add('red-glow'), addtime);
  setTimeout(() => useChoice_div.classList.remove('red-glow'), rmvtime);
  
}

function draw(userChoice, computerChoice){
  switch (userChoice + computerChoice) {
    case "ss": 
    setTimeout(() => {
      s1_div.classList.add('gray-glow');
    }, addtime);
    setTimeout(() => {
      s1_div.classList.remove('gray-glow');
    }, rmvtime);  break;
    case "pp":
      setTimeout(() => {
        p1_div.classList.add('gray-glow');
      }, addtime);
      setTimeout(() => {
        p1_div.classList.remove('gray-glow');
      }, rmvtime);  break;
    case "rr":
      setTimeout(() => {
        r1_div.classList.add('gray-glow');
      }, addtime);
      setTimeout(() => {
        r1_div.classList.remove('gray-glow');
      }, rmvtime);  break;
  
  }
  const useChoice_div = document.getElementById(userChoice);
  setTimeout(() => {
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} equals to ${smallCompWord}${convertToWord(computerChoice)} - `+`  It's a draw!!!`.fontcolor("black");
  }, timeout);
  setTimeout(() => useChoice_div.classList.add('gray-glow'), addtime);
  setTimeout(() => useChoice_div.classList.remove('gray-glow'), rmvtime);
  
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}



function main() {
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

main();
