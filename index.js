var score = 0;
const mycards = [
    {name:"angry",img:"angry.png"},
    {name:"chick",img:"chick.png"},
    {name:"ghost",img:"ghost.png"},
    {name:"postman",img:"postman.png"},
    {name:"raphael",img:"raphael.png"}
]
let gamearray = [
    {name:"angry",img:"angry.png"},
    {name:"chick",img:"chick.png"},
    {name:"ghost",img:"ghost.png"},
    {name:"postman",img:"postman.png"},
    {name:"raphael",img:"raphael.png"}
]
for(i=0;i<3;i++){
 gamearray.push(mycards[Math.floor(Math.random()*5)])
}
const newarray = gamearray.flatMap(i => [i,i]); 
newarray.sort(()=>0.5-Math.random());
function makeABoard(){
    for(i=0;i<newarray.length;i++){
        const carddisplay = document.createElement("img");
        carddisplay.setAttribute("src","./public/question-mark.png");
        carddisplay.setAttribute("data-id",i);
        document.querySelector(".img-container").appendChild(carddisplay);
      
    }
}
makeABoard();
function showCard(){
    for(i=0;i<newarray.length;i++){
        document.querySelector(`[data-id="${i}"]`).src = "./public/"+`${newarray[i].img}`
    }
    setTimeout(()=> {
    for(i=0;i<newarray.length;i++){
        document.querySelector(`[data-id="${i}"]`).src = "./public/question-mark.png";
     document.querySelector(`[data-id="${i}"]`).addEventListener("click",flip,{once:true})}
},4000)
}
function gameFlow(){
    document.querySelector("button").addEventListener('click',showCard,{once : true});
}
let compare = [];

function flip(){

    document.querySelector(`[data-id="${this.getAttribute("data-id")}"]`).src = "./public/"+`${newarray[this.getAttribute("data-id")].img}`;  
    
    compare.push(newarray[this.getAttribute("data-id")].name);
    
if(compare.length == 2){
    if(compare[0]==compare[1]){
        console.log("right");
        compare=[];
        score = score + 2;
        console.log(score);
        document.querySelector("h1").innerText = "Your score: " + score;
    }
    else{
        console.log("stop");
        document.body.addEventListener('click',reload, {once:true});
}
}
if (score == 16){
    alert("Congrates!! King of memory!!")
}
}
function reload(){
    alert("Catch u! The game will restart ");
    setTimeout(()=>location.reload(),3000)
}
gameFlow();
