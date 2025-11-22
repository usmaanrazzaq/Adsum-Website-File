let scrollContainer = document.querySelector('.scrollContainer');
var containerImages = scrollContainer.querySelectorAll(':scope > a');
let campHeroExplainer = document.querySelector('.campHeroExplainer');
let shadeShortExplainer = document.querySelector('.shadeShortExplainer');
let otterSwimExplainer = document.querySelector('.otterSwimExplainer');
let siteShortExplainer = document.querySelector('.siteShortExplainer');
let expeditionShortExplainer = document.querySelector('.expeditionShortExplainer');
let bankShortExplainer = document.querySelector('.bankShortExplainer');
let effoShortExplainer = document.querySelector('.effoShortExplainer');
let laxShortExplainer = document.querySelector('.laxShortExplainer');

let firstExplainer = document.querySelector('.firstExplainer');

let showSearch = document.querySelector('.show2');



let shadeShortCircle = document.querySelectorAll('.shadeShortCircle');
const shadeShortCircleArr = Array.from(shadeShortCircle);

let campHeroCircle = document.querySelectorAll('.campHeroCircle');
const campHeroCircleArr = Array.from(campHeroCircle);

let otterSwimCircle = document.querySelectorAll('.otterSwimCircle');
const otterSwimCircleArr = Array.from(otterSwimCircle);

let siteShortCircle = document.querySelectorAll('.siteShortCircle');
const siteShortCircleArr = Array.from(siteShortCircle);

let expeditionShortCircle = document.querySelectorAll('.expeditionShortCircle');
const expeditionShortCircleArr = Array.from(expeditionShortCircle);

let laxShortCircle = document.querySelectorAll('.laxShortCircle');
const laxShortCircleArr = Array.from(laxShortCircle);

let effoShortCircle = document.querySelectorAll('.effoShortCircle');
const effoShortCircleArr = Array.from(effoShortCircle);

let bankShortCircle = document.querySelectorAll('.bankShortCircle');
const bankShortCircleArr = Array.from(bankShortCircle);



var containerImagesArr = Array.prototype.slice.call(containerImages);
console.log(containerImagesArr);

function givingImagesMouseOver(){
for (var i = 0; i < containerImagesArr.length; i++){
containerImagesArr[i].addEventListener('mouseover', infoContainerChange)
}
}

let visible = [firstExplainer];
let circle = [];


function toggle(x) {
  //var element = document.getElementById('symbolsContainer0');
  //h1.classList.toggle('show');
  let toggleVariable = x;
  toggleVariable.classList.toggle('hide2');
  toggleVariable.classList.toggle('show2');
}





function toggleCircleColor(y, c) {
  //var element = document.getElementById('symbolsContainer0');
  //h1.classList.toggle('show');
  let toggleColorVariable = y;
  let classColor = c
  toggleColorVariable.classList.toggle(classColor);
}


givingImagesMouseOver();



function infoContainerChange(event){
  console.log('helloWORLD');
  console.log(event.target.classList)
  toggle(visible[0]);
  visible.pop(visible[0]);
  
  if (circle.length > 0){
    for ( let l = 0; l < circle.length; l++)
    circle[l].classList.remove('shadeShortColor', 'campHeroColor', 'otterSwimColor', 'siteShortColor', 'expeditionShortColor', 'effoShortColor', 'laxShortColor', 'bankShortColor');
  }
circle.length = 0;

  
  if (event.target.classList[0] == 'shadeShort'){
    console.log('SHADE SHORT')
    visible.push(shadeShortExplainer);
    toggle(visible[0]);
    
    for ( let s = 0; s < shadeShortCircleArr.length; s++){
    circle.push(shadeShortCircleArr[s]);
    toggleCircleColor(circle[s], 'shadeShortColor' );
    }
  
  } else if (event.target.classList[0] == 'campHero'){
    console.log('CAMP HERO')
    visible.push(campHeroExplainer);
    toggle(visible[0]);
    
    for ( let s = 0; s < campHeroCircleArr.length; s++){
    circle.push(campHeroCircleArr[s]);
    toggleCircleColor(circle[s], 'campHeroColor' );
    }

  }
    else if (event.target.classList[0] == 'otterSwim'){
    console.log('OTTER SWIM')
    visible.push(otterSwimExplainer);
    toggle(visible[0]);

    for ( let s = 0; s < otterSwimCircleArr.length; s++){
    circle.push(otterSwimCircleArr[s]);
    toggleCircleColor(circle[s], 'otterSwimColor' );
    }

  }else if (event.target.classList[0] == 'siteShort'){
    console.log('SITE SHORT')
    visible.push(siteShortExplainer);
    toggle(visible[0]);

    for ( let s = 0; s < siteShortCircleArr.length; s++){
    circle.push(siteShortCircleArr[s]);
    toggleCircleColor(circle[s], 'siteShortColor' );
    }

  }else if (event.target.classList[0] == 'expeditionShort'){
    console.log('EXPEDITION SHORT')
    visible.push(expeditionShortExplainer);
    toggle(visible[0]);

    for ( let s = 0; s < expeditionShortCircleArr.length; s++){
    circle.push(expeditionShortCircleArr[s]);
    toggleCircleColor(circle[s], 'expeditionShortColor' );
    }

  }else if (event.target.classList[0] == 'bankShort'){
    console.log('BANK SHORT')
    visible.push(bankShortExplainer);
    toggle(visible[0]);

    for ( let s = 0; s < bankShortCircleArr.length; s++){
    circle.push(bankShortCircleArr[s]);
    toggleCircleColor(circle[s], 'bankShortColor' );
    }
      

  }else if (event.target.classList[0] == 'laxShort'){
    console.log('LAX SHORT')
    visible.push(laxShortExplainer);
    toggle(visible[0]);

    for ( let s = 0; s < laxShortCircleArr.length; s++){
    circle.push(laxShortCircleArr[s]);
    toggleCircleColor(circle[s], 'laxShortColor' );
    }

  }else if (event.target.classList[0] == 'effoShort'){
    console.log('EFFO SHORT')
    visible.push(effoShortExplainer);
    toggle(visible[0]);

    for ( let s = 0; s < effoShortCircleArr.length; s++){
    circle.push(effoShortCircleArr[s]);
    toggleCircleColor(circle[s], 'effoShortColor' );
    }
  }
  

  
}

function call(y){
  console.log(y + 'nice')
}
call(4);

