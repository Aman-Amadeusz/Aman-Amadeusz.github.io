var slider = document.querySelector('.slider');
var sliderChildren = document.querySelector('.slider').children;
//console.log(sliderChildren, 'sliderChildren');
const sliderLength = sliderChildren.length-1;
//console.log(sliderLength, 'sliderLength');
var sliderLastItem = sliderChildren[sliderLength];
//console.log(sliderLastItem, 'sliderLastItem');
var count = 0;
//console.log(count, 'count');
sliderLengthNext = sliderChildren.length+1;

sliderChildren[count].style.display = 'flex';

sliderChildren[count].nextElementSibling.style.display = 'flex';
sliderChildren[count].nextElementSibling.style.scale = '0.8';

if(sliderChildren[count].previousElementSibling == null){
    sliderLastItem.style.display = 'flex';
}

sliderLastItem.style.left = '-100%';
sliderLastItem.style.position = 'relative';
sliderLastItem.style.scale = '0.8';


console.log(sliderChildren[count], 'sliderChildren[count]');

var prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', pB=>{

    sliderChildren[count].parentNode.insertBefore(sliderChildren[sliderLength], sliderChildren[0])

    sliderChildren[0].style.left = '0';
    sliderChildren[0].style.display = 'flex';
    sliderChildren[0].style.scale = '1';

//console.log(sliderChildren[0], 'sliderChildren[0]');
    count--;
    if(count<0){
        count = sliderLength;
    }
    if(sliderChildren[0].previousElementSibling == null){
        sliderChildren[sliderLength].style.display = 'flex';
        sliderChildren[sliderLength].style.left = '-100%';
        sliderChildren[sliderLength].style.position = 'relative';
        sliderChildren[sliderLength].style.scale = '0.8';
    }
    sliderChildren[1].nextElementSibling.style.display = 'none';
    sliderChildren[0].nextElementSibling.style.scale = '0.8';

    
//    sliderChildren[count].parentNode.insertBefore(sliderChildren[count], sliderChildren[count].previousElementSibling )


    /*sliderChildren[count].style.display = 'flex';
    sliderChildren[count].previousElementSibling.style.display = 'flex';
    sliderChildren[count].nextElementSibling.style.display = 'flex';*/
    


//console.log('Jestem \'Prev\'');
});

var nextButton = document.querySelector('.next');
nextButton.addEventListener('click', nB=>{


    sliderChildren[count].parentNode.insertBefore(sliderChildren[0], sliderChildren[sliderLengthNext])
    count++;


    sliderLastItem.style.left = '0'
    sliderChildren[0].style.display = 'flex';
    sliderChildren[0].style.scale = '1';
    sliderChildren[0].nextElementSibling.style.display = 'flex';
    sliderChildren[0].nextElementSibling.style.left = '0';
    sliderChildren[0].nextElementSibling.style.scale = '0.8';

//console.log(sliderChildren[0], 'sliderChildren[0]');
    //sliderChildren[0].previousElementSibling.style.scale = '0.8';
    if(count > sliderLength){
        count = 0;
    }
    sliderChildren[sliderLength].style.left = '-100%';
    sliderChildren[sliderLength].style.position = 'relative';
    sliderChildren[sliderLength-1].style.display = 'none';
    if(sliderChildren[0].nextElementSibling == null){
        sliderChildren[sliderLengthNext].style.display = 'flex';
    }
    if(sliderChildren[0].previousElementSibling == null){
        
    }
    sliderChildren[sliderLength].style.scale = '0.8';
    

//console.log(count, 'count');

//console.log('Jestem \'Next\'');
});
