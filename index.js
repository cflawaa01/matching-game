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
        carddisplay.addEventListener("click",flip)
    }
}
makeABoard();
function flip(){
    document.querySelector(`[data-id="${this.getAttribute("data-id")}"]`).src = "./public/"+`${newarray[this.getAttribute("data-id")].img}`

}