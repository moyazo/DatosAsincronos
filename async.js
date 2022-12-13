"use strict"

async function fetchConection(){
    let response = await fetch("https://random.imagecdn.app/500/500");
    const image = response.url
    return image;
}


let callBack = async () => {
    try {
       let nombre = await fetchConection();
        return nombre;
        
    } catch (error) {
        console.log(error);
    }
}


let createCard = () => {
    const cardsDOM = document.getElementById("cards");

    const divCard = document.createElement("div");
    divCard.setAttribute("class","card");

    const divInfo = document.createElement("div");
    const infoElem = document.createElement("p");
    divInfo.innerHTML = "HOA TIOOOOOOOO";

    const divImg = document.createElement("div");
    const imgContent = document.createElement("img");
    imgContent.setAttribute("src",`${callBack()}`);
 
    divCard.append(divImg);
    divImg.append(imgContent);
    divCard.append(divInfo);
    cardsDOM.append(divCard);
}