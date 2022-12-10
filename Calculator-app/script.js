
function insert(numb){
  document.querySelector(".textview").value += numb;
  console.log(numb);
  }

  function equals(){
    document.querySelector(".textview").value = eval( document.querySelector(".textview").value)
    console.log("calculate");
      
  }
  
  function clean(){
    document.querySelector(".textview").value = " ";
    console.log("cleared");
  }
  
  function back(){
    document.querySelector(".textview").value = document.querySelector(".textview").value.slice(0, -1);
    console.log("slice done");
  }

