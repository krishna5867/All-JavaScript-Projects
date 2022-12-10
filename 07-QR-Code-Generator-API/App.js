let inputBox = document.querySelector(".data");
let button = document.querySelector(".submit");
let qrimg = document.querySelector("#img");
let main = document.querySelector(".main");

button.addEventListener("click", ()=>{
    let inpValue = inputBox.value;
    // console.log(inpValue);

    if(!inpValue){
        return;
    }
        button.innerText = "Generating QR Code";
        main.style.height = "550px";
        qrimg.style.display = "block";

        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpValue}`;
        qrimg.addEventListener("load", ()=>{
            main.classList.add("active");
            button.innerText = "Generate QR Code";
        })
        inputBox.addEventListener("keyup", () => {
            if(!inputBox.value){
                qrimg.style.display = "none";
                main.style.height = "300px"
                main.classList.remove("active");
            }
        })

    });
