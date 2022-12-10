var hr = 0;
var mint = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}


function stop(){
    timer = false;
}


function restart(){
    timer = false;

    hr=0;
    mint=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("mint").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("count").innerHTML = "00";
}

function stopwatch(){

        if(timer == true){
                count = count +1;

                
                if(count == 100){
                    sec = sec + 1;
                    count = 0;
                }

                if(sec == 60){
                    mint = mint +1;
                    sec= 0;
                }

                if(mint == 60){
                    hr = hr +1;
                    mint= 0;
                    sec = 0;
                }

                var mintString = mint;
                var secString = sec;
                var countString = count;
                var hrString = hr;


                if(hr < 10){
                    hrString = "0" + hrString;
                }

                if(mint < 10){
                    mintString = "0" + mintString;
                }


                if(sec < 10){
                    secString = "0" + secString;
                }

                if(count < 10){
                    countString = "0" + countString;
                }


                document.getElementById("hr").innerHTML = hrString;

                document.getElementById("mint").innerHTML = mintString;

                document.getElementById("sec").innerHTML =  secString;

                document.getElementById("count").innerHTML =  countString;



            setTimeout("stopwatch()", 10);
        }
}