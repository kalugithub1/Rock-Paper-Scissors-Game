function game(){
    const randomNumber=Math.random();

    let computerMove="";


     if(randomNumber>=0&&randomNumber<=1/3){
        computerMove= "rock";
     }else if(randomNumber>1/3&&randomNumber<=2/3){
       computerMove= "paper";
     }else if(randomNumber>2/3&&randomNumber<=1){
         computerMove="scissors";
     }
     return computerMove;
 }

let score=JSON.parse(localStorage.getItem('score'))||{
 Win:0,
 Loses:0,
 Ties:0
}
 


 

 function playerTurn(playerchoice){
     const computerMove=game();
   let  result="";

     if(playerchoice===computerMove){
         result="Tie";
     }
     else if(
         (playerchoice==="rock"&&computerMove==="scissors") ||
         (playerchoice==="paper"&&computerMove==="rock") ||
         (playerchoice==="scissors"&&computerMove==="paper")){
         result="You win";
     }else{
         result="You lose";
     }


     if(result==="You win"){
         score.Win +=1;
     }else if(result==="You lose"){
         score.Loses +=1;
     }else if(result==="Tie"){
         score.Ties +=1;
     }

     localStorage.setItem('score',JSON.stringify(score));

     updatescore();


     document.querySelector(".results").innerHTML=result;

     document.querySelector(".moves").innerHTML=` 
     You <img src="images/${playerchoice}-emoji.png" class="move-emojis">
     computer <img src="images/${computerMove}-emoji.png" class="move-emojis"> `;

 }



 function updatescore(){

     document.querySelector(".scores").innerHTML=`Win:${score.Win}, Loses:${score.Loses}, Ties:${score.Ties}`; 


 }

 updatescore();
 


 function reset(){
     score.Win=0;
     score.Ties=0;
     score.Loses=0;
     localStorage.removeItem('score');
     updatescore();
 }
