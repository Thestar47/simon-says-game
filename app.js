let gameseq=[];
let userseq=[];

let btns=["red","green","yellow","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
    }
    levelup();
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){

        btn.classList.remove("flash");
        
    }, 300);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){

        btn.classList.remove("userflash");
        
    }, 200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level Up: ${level}`;
    
    //random number
    let randomindx=Math.floor(Math.random()*4);
    let rancolor=btns[randomindx];
    let ranbtn=document.querySelector(`.${rancolor}`);

    gameseq.push(rancolor);
    console.log(gameseq);

    btnFlash(ranbtn);
}

function checkans(idx){
    //console.log("Current level :",level);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over !  Your Score Was <b>${level}</b><br><br>Press any Key to ReStart Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
   let btn=this;
   userFlash(btn);

   usercolor= btn.getAttribute("id");
   userseq.push(usercolor); 

   checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level =0;
}