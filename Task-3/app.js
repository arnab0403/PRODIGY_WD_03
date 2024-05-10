let box = document.querySelectorAll(".box");
let turnO=true;
let msg = document.querySelector(".msg");
let reset=document.querySelector(".reset");
let new_button =document.querySelector(".new");
let winning_con=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

box.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO)
            {
                box.innerHTML="O";
                turnO=false;
            }
            else
            {
                box.innerHTML="X";
                turnO=true;
            }
            box.disabled=true;
            check_winner();
    });
});


const disable =()=>
    {
        box.forEach((box)=>{
            box.disabled=true;
        });
    };

const show_winner = (winner) =>{
    msg.classList.remove("hide");
    document.querySelector(".msg_h").innerHTML="Winner is "+winner;
}

const new_game = () =>{
    reset_game();
    msg.classList.add("hide");
}

const check_winner = () =>{
        for (let key of winning_con) {
            let val1=box[key[0]].innerHTML;
            let val2=box[key[1]].innerHTML;
            let val3=box[key[2]].innerHTML;

            if(val1!="" && val2!="" && val3!="")
                {
                    if(val1===val2 && val2===val3)
                        {
                            show_winner(val1);
                            disable();
                        }
                }
        }
};
const reset_game = () =>{
    box.forEach((box)=>{box.disabled=false;
        box.innerHTML="";});
        turnO=true;
}
reset.addEventListener("click",()=>{
    reset_game();
})

new_button.addEventListener("click",()=>{
    new_game();
})