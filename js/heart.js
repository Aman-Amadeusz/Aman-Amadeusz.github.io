function heartBeat(){
    //let heart = new Audio ("music/heart-beat.wav");
    let radius = document.querySelector(".frontWindowSec");
    let secScene = document.querySelector(".secScene");
    let frontWindow = document.querySelector(".frontWindow");
//console.log(secScene, 'secScene');

    
    radius.style.width = '20%'; // 290
    radius.style.height = '40%'; // 290
    radius.style.position = "absolute";
    radius.style.zIndex = "100";
    radius.style.backgroundColor = "#black";

    console.log(radius.offsetWidth, 'radius.offsetWidth2');
    console.log(radius.offsetHeight, 'radius.offsetheigth2');
    let diameter = (290 - 10);
console.log(diameter, 'diameter');    




    let i = 0;
   /* let impuls = setInterval(() => {
        i++;
        let secSceneFullWidth = secScene.offsetWidth;
        let secSceneFullHeight = secScene.offsetHeight;

        frontWindow.style.width = '45%';
        frontWindow.style.height = '20%';

        
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
    }, 135);*/
}