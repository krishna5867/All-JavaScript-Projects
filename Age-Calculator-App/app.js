const container = document.querySelector(".container");
const error = document.querySelector(".error");

const dob = document.querySelector("#dob");


function getAge(){
    return dob.value;
}

function calcAge(){
    let age = getAge();
    console.log(age);
    const calAge = age.split("-");

    let date = new Date();
    let year = date.getFullYear(); 
    let month = date.getMonth();
    let day = date.getDate();

    return {
        years: year - calAge[0],
        months: month - calAge[1] + 1,
        days: day - calAge[2],
    }
}

function displayAge(){
    let myAge = calcAge();

    for (e in myAge){
        if (myAge[e] < 0){
            error.style.display = "block";
        }else{
            error.style.display = "none";
            container.querySelector(".age span").innerText = myAge[e];
        }
    }
    container.querySelector(".age :nth-child(1)").innerText = myAge.years;
    container.querySelector(".age :nth-child(2)").innerText = myAge.months;
    container.querySelector(".age :nth-child(3)").innerText = myAge.days; 
}
dob.addEventListener("input", displayAge);


