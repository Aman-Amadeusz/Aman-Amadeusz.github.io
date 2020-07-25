function firstInput(){
    let valueX = document.querySelector(".firstInput");
    if(valueX.value == "a"){
        let up = document.querySelector(".up");
        let down = document.querySelector(".down");
        let i = 0;
        let kurtyna = setInterval(() => {
            i++;
            down.style.top = (down.offsetTop+5)+"px";
            up.style.top = (up.offsetTop-5)+"px";
            console.log("i");
            if(i > 100){
                $(".firstScene").fadeOut("slow");
                clearInterval(kurtyna);
            }
        }, 50);
        

    }
    
}
$(".firstScene").hide();