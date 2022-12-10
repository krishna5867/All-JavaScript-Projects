const btn = document.getElementById("button");
btn.addEventListener("click", changeBackground);

const randomColor = () => {
    let hex = "0123456789ABCDEF";
    let cons = "#";

    for(let i = 0; i < 6; i++){
        cons = cons + hex[Math.floor(Math.random() * 16)];
    }
    return cons;
};
    console.log(randomColor());

    function changeBackground(){
        document.getElementById("canvas").style.backgroundColor = randomColor();
    }

