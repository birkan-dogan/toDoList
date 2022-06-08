// for title
const h1 = document.getElementById("h1");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
h1.innerHTML += " " + day + " 👋";

const input = document.getElementById("item"); // add item
const ul = document.querySelector("ul");
const butonArtı = document.getElementById("btn");

// let progress = 0;
// let toplam = 0;

butonArtı.onclick = function(){
    if(!input.value){
        alert("Please Fill the Blank!")
    }
    else{
    let listItem = document.createElement("li");
    listItem.className = "list-item";
    let buton = document.createElement("button");
    buton.className = "btnTick";
    buton.innerHTML = "#";
    let trash = document.createElement("i");
    trash.className = "fa-solid fa-trash delete";
    const textNode = document.createTextNode(input.value);
    const p = document.createElement("p");
    p.appendChild(textNode);
    listItem.appendChild(buton);
    listItem.appendChild(p);
    listItem.appendChild(trash);
    ul.appendChild(listItem);
    // toplam++
    // return toplam
    }
}
// capturing for list

const list = document.getElementById("list-items");
list.addEventListener("click",yakala);

function yakala(e){
    // console.log(e.target);
    if(e.target.classList.contains("delete")){
        if(e.target.parentNode.children[0].innerHTML =="💪"){
            e.target.parentNode.style.backgroundColor = "#d9534f";
            e.target.parentNode.remove();
        }
        else{
            alert("You should complete the task before delete")
        }
    }
    if(e.target.classList.contains("btnTick")){
        if(e.target.innerHTML == "💪"){
            e.target.innerHTML = "#";
            // console.log("hello");
            e.target.nextElementSibling.style.textDecoration = "none";
            e.target.parentNode.style.backgroundColor = "#f0ad4e";
            e.target.parentNode.style.transform = "rotateY(360deg)";
        } else{
            e.target.innerHTML = "💪"
            e.target.nextElementSibling.style.textDecoration = "line-through";
            e.target.parentNode.style.backgroundColor = "#5cb85c";
            e.target.parentNode.style.transform = "rotateX(360deg)";
            // progress++;
            // console.log(progress);
        }
            // return progress;
    }
}

// enter to add

input.onkeydown = function enter(e){
    // console.log(e);
    if(e.keyCode === 13){
        butonArtı.onclick();
    }
}

// clear btn
const clear = document.getElementById("clear");
console.log(ul);
clear.onclick = function(){
    if(confirm("Do you really want to delete the whole list?")){
    for(let i = ul.childElementCount - 1; i >= 0 ;i--){
        console.log(i);
        clear.parentElement.parentElement.previousElementSibling.children[0].children[i].remove();
    }}
}

// progress bar will be added
// const tut = document.getElementById("progress");
// tut.innerHTML = `${progress} OUT OF ${toplam} COMPLETED