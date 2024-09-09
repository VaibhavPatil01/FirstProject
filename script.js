let button = document.getElementById("button");
let bulb = document.getElementById("bulb");
let flag = true;

button.addEventListener("click",function(){
    if(flag == true)
    {
        button.innerHTML = "Off";
        bulb.style.backgroundColor = "yellow";
        flag = false;
    }
    else
    {
        button.innerHTML = "On";
        bulb.style.backgroundColor = "white";
        flag = true;
    }
})