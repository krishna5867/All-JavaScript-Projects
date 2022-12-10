let input = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let show = document.querySelector("#para");
let reverse;


input.addEventListener("keyup", ()=>{
    reverse = input.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    console.log(reverse);
});

btn.addEventListener("click", ()=>{

    let match = reverse.split("").reverse().join("");
    console.log(match);

    show.style.display = "block";

    if(reverse != match){
        return show.innerText = `No, "${inp.value}" is a not Palindrome`;
        // console.log("not match");
    }else{
        return show.innerText = `Yes, "${inp.value}" is a Palindrome`;
        // console.log("match");
    }
});



