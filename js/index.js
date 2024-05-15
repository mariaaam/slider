// ......htmlElement

let layer= document.querySelector(".layer");
let AllImges=Array.from(document.querySelectorAll("img")) ;
let inner =document.querySelector(".inner")
// console.log(inner)
let nextArrow=document.querySelector(".fa-arrow-right");
let prevArrow=document.querySelector(".fa-arrow-left ");
let closeIcons=document.querySelector(".fa-xmark");




//  variable

let clickedImgIndex=0;
// displayLayer...


for (let i = 0; i < AllImges.length; i++) {
    AllImges[i].addEventListener("click",function(e){
      let clickedImg= e.target;
     clickedImgIndex =AllImges.indexOf(clickedImg);
        let clickedImgSrc=clickedImg.getAttribute("src");
        layer.classList.replace("d-none" ,"d-flex")  // console.log("img")

        

        // console.log(clickedImgSrc)
        inner.style.backgroundImage=`url(${clickedImgSrc})`;
    })
    
}



// nextELement//////////

function getNextElemnt(){
clickedImgIndex ++;
if(clickedImgIndex == AllImges.length){
    clickedImgIndex =0;
}
let srcNext=AllImges[clickedImgIndex].getAttribute("src");
inner.style.backgroundImage=`url(${srcNext})`;

}


// prevfunction=====
function getPrevElemnt(){
    clickedImgIndex --;
    if(clickedImgIndex == -1){
        clickedImgIndex = AllImges.length -1;
    }
    let srcNext=AllImges[clickedImgIndex].getAttribute("src");
    inner.style.backgroundImage=`url(${srcNext})`;
    
    }

// closefunc

function hiddenElemnt(){
    layer.classList.replace("d-flex","d-none")
}


nextArrow.addEventListener("click",getNextElemnt);
prevArrow.addEventListener("click",getPrevElemnt);
closeIcons.addEventListener("click",hiddenElemnt);

document.addEventListener("keydown",function(e){
    if(e.code == "ArrowRight"){
        getNextElemnt();
    }
    else if(e.code == "ArrowLeft"){
        getPrevElemnt()
    }
    else if(e.code == "Escape"){
        hiddenElemnt()
    }
})


layer.addEventListener("click",function(e){
    if(e.target == layer){
        hiddenElemnt()
    }
})