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