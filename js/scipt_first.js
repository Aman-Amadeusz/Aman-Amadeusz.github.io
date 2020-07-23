function firstInput(){
    let valueX = document.querySelector(".firstInput");
    if(valueX.value == "Amadeusz"){
        $(".prawa").fadeOut();
        $(".lewa").fadeOut();
        $(".firstScene").fadeOut();
    }
}