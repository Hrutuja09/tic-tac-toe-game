var btn = document.querySelectorAll(".box")
var reset = document.querySelector(".reset-game")
var new_game = document.querySelector(".new-game")
var win = document.querySelector("p")
var msgContainer = document.querySelector(".msg-container")

var turn0 = true
var winning_patterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// reset game 
var resetGame = ()=>{
    turn0 = true
    enablebox()
    msgContainer.classList.add("hide")

}

var disablebox = ()=>{
    for(var box of btn){
        box.disabled=true
    }
}
var enablebox = ()=>{
    for(var box of btn){
        box.disabled=false
        box.innerText=""
    }
}

// checking for each turn once the button is clicked.
btn.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "O"
            turn0=false
        }
        else{
            box.innerText = "X"
            turn0=true
        }
        box.disabled = true
        pattern()
        if(draw()){
            win.innerText = "Ah oh, It`s a Draw!"
            msgContainer.classList.remove("hide")
            disablebox()
        }
    })
});


// checking for winning patterns
var pattern = () =>{
    for(let i=0;i<winning_patterns.length;i++){
        var position1 = btn[winning_patterns[i][0]].innerText
        var position2 = btn[winning_patterns[i][1]].innerText
        var position3 = btn[winning_patterns[i][2]].innerText
        if(position1 !="" && position2!="" && position3!=""){
            if (position1 === position2 && position2===position3){
                win.innerText = "Congratulations, Winner is "+ position1;
                msgContainer.classList.remove("hide")
                disablebox()
            }
        }
    }

}
// for draw condition
var draw = ()=>{
    for(let i=0;i<9;i++){
        if(btn[i].innerText === ""){
            return false;
        }
    }
    return true;
}

reset.addEventListener("click", resetGame);
new_game.addEventListener("click",resetGame)


