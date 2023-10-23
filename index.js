const mycards = [
    {name:"angry",img:"angry.png"},
    {name:"chick",img:"chick.png"},
    {name:"ghost",img:"ghost.png"},
    {name:"postman",img:"postman.png"},
    {name:"raphael",img:"raphel.png"}
]
let gamearray = [
    {name:"angry",img:"angry.png"},
    {name:"chick",img:"chick.png"},
    {name:"ghost",img:"ghost.png"},
    {name:"postman",img:"postman.png"},
    {name:"raphael",img:"raphel.png"}
]
for(i=0;i<3;i++){
 gamearray.push(mycards[Math.floor(Math.random()*5)])
}
const newarray = gamearray.flatMap(i => [i,i]); 
console.log(newarray)
function makeABoard(){
    for(i=0;i<newarray.length;i++){
        const carddisplay = document.createElement("img");
        carddisplay.setAttribute("src","./public/question-mark.png");
        carddisplay.setAttribute("data-id",i);
        document.querySelector(".img-container").appendChild(carddisplay);
    }
}
makeABoard();