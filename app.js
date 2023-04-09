const btn = document.getElementById('click');
const para = document.getElementById('advice');
const id = document.getElementById('id');

document.addEventListener('DOMContentLoaded', logJSONData(), false);

async function logJSONData() {
    return await fetch("https://api.adviceslip.com/advice").then((response) => response.json()).then((response) => response.slip).then((response) => response.id !== id.innerText ? chng(response) : logJSONData());
}

const chng = (response)=>{
    para.innerText = response.advice;
    id.innerText = response.id; 
}

btn.addEventListener("click", logJSONData);
