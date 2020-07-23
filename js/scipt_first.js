function firstInput(){
    let valueX = document.querySelector(".firstInput");
    if(valueX.value == "a"){
        let gora = document.querySelector(".lewa");
        let dol = document.querySelector(".prawa");
        let i = 0;
        let kurtyna = setInterval(() => {
            i++;
            dol.style.top = (dol.offsetTop+5)+"px";
            gora.style.top = (gora.offsetTop-5)+"px";
            console.log("i");
            if(i > 100){
                $(".firstScene").fadeOut("slow");
                clearInterval(kurtyna);
            }
        }, 50);
        

    }
}