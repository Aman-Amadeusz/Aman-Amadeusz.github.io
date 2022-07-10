function heartBeat(){
    let heart = new Audio ("music/heart-beat.wav");
    let radius = document.querySelector(".frontWindowSec");
    
    let i = 0;
    let impuls = setInterval(() => {
        i++;

        radius.style.width = (radius.offsetWidth-10.50833892822266)+"px";
        radius.style.height = (radius.offsetHeight-10.50833892822266)+"px";
 

        if(i == 16) {
            radius.style.width = (radius.offsetWidth+129)+"px";
            radius.style.height = (radius.offsetHeight+129)+"px";
            heart.play();

        }
        if(i == 19) {
            radius.style.width = (radius.offsetWidth+18.8)+"px";
            radius.style.height = (radius.offsetHeight+18.8)+"px";

            if(i == 19){
                i = 0;
            }
        }
    }, 135);
}