let jokes = document.querySelector("#joke");
let btn = document.querySelector(".btn");
let ans = document.querySelector(".ans");

btn.addEventListener("click", ()=>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(e => e.json())
    .then(result =>{
    jokes.innerText = result.setup;
    // consol.log(jokes);
    setTimeout(() => {
    ans.innerText = `Ans - ${result.punchline} `;
        
    }, 2000);
    ans.innerText = "";
    })
});
