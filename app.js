let boxes = document.querySelectorAll(".box");
let resetbut = document.querySelector("#reset-but");
let newgamebut = document.querySelector("#new-but");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 





const winpattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

let turn0 =true; //playerX, playerY


boxes.forEach((box)  => {
    box.addEventListener("click",  () => {
        console.log("box was click");
        if(turn0) {
            box.innerText= "X";
            turn0 = false;
        }else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true; 

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
               console.log("winner", pos1Val);
                showWinner(pos1Val);
                                          

            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
  
    disableBoxes();
    };
  





const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const  resetGame = () => {
    true0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

newgamebut.addEventListener("click", resetGame);
resetbut.addEventListener("click", resetGame);

 




