let answer = document.getElementById("answer");
inputs = document.querySelectorAll(".buttons input");
inputs.foreach(ip =>{
    ip.addEventListener("click", (e)=>{
        txt = e.target.value;
        if(txt == "AC"){
            answer.value = "";
        }
        else if(txt == "="){
            answer.value = eval(answer.value);
        }
        else if(txt == "DEL"){
            answer.value = answer.value.substr(0,answer.value.length - 1);
        }
        else{
            answer.value +=txt;
        }
    });
});