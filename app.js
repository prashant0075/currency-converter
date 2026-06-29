let BASE_URL ="https://flagsapi.com/BE/flat/64.png";
let api = "https://latest.currency-api.pages.dev/v1/currencies";


let from = document.querySelector("#fromCurr");
let to = document.querySelector("#toCurr");
let select = document.querySelectorAll("select");
let element = document.createElement("option");
let fromImage = document.querySelector("#fromImg");
let toImage  = document.querySelector("#toImg");
let btn = document.querySelector("#btn");
let input = document.querySelector("input");


for(let dropDowns of select){
    for(c in countryList){
    let element = document.createElement("option");
    element.innerText = c;
    element.value = countryList[c];
    dropDowns.append(element);

    from.addEventListener("change",()=>{
        fromImage.src = `https://flagsapi.com/${from.value}/flat/64.png`;
    })

    to.addEventListener("change",()=>{
        toImage.src = `https://flagsapi.com/${to.value}/flat/64.png`;
    })
}
}

const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    if(input.value<=0){
        input.value = 1;
        input.innerText = 1;
    }
    console.log(input.value)
    getData();
})

async function getData(){
    let curr = from.selectedOptions[0].text;
    let toCurr = to.selectedOptions[0].text;
    let a = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${curr.toLowerCase()}.json`);
    let b = await a.json();
    console.log(b);
    console.log(b[toCurr]);
}


