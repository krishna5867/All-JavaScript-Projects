const input = document.querySelector("#binary");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let inpValue = input.value;
    if(inpValue.match(/^[0-1]+$/)){
        let decimal = parseInt(inpValue, 2);
        result.textContent = `Decimal Number: ${decimal}`;
    }else{
        result.textContent = "Input Field is Empty"
    }
})