let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepar = document.querySelector("#user-score")
const compScorepar = document.querySelector("#comp-score")


const getcompscore = ()=>{
    const option = ["rock" , "paper" , "scissors"]
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
} 
const drawgame =()=>{
    console.log("game was draw");
    msg.innerText = "Game was draw . Play again."
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin , userchoice, compchoice)=>{
    if(userWin){
        userScore++;
        userScorepar.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice} `
        msg.style.backgroundColor = "green";
        }else{
            compScore++;
        compScorepar.innerText = compScore;z
            msg.innerText = `You Lost!  ${compchoice} beats Your ${userchoice} `
            msg.style.backgroundColor = "red";
        };
    }

const playGame = (userchoice)=>{
    console.log("user score" , userchoice);
    const compchoice = getcompscore();
    console.log(" comp score" , compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin  = compchoice === "paper"? false : true;
        }else if(userchoice === "paper"){
            userWin  = compchoice === "scissors"? false : true;
        }else{
            userWin  = compchoice === "rock"? false : true;
        }
            showWinner (userWin , userchoice , compchoice);
        
        }
    };
choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
        let userchoice = choice.getAttribute("id")
        playGame (userchoice);
    });
});