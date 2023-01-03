const menuOne = document.getElementById("menu_1");
const menuTwo = document.getElementById("menu_2");
const menuThree = document.getElementById("menu_3");
const menuFour = document.getElementById("menu_4");

const blockOne = document.getElementById("chambre2");
const blockOneB = document.getElementById("chambre2_2");
const numberNights = document.getElementById("nombreN");
const blockTwo = document.getElementById("chambre3");
const blockTwoB = document.getElementById("chambre3_2");
const blockThree = document.getElementById("chambre4");
const blockThreeB = document.getElementById("chambre4_2");
const blockFour = document.getElementById("chambre5");
const blockFourB = document.getElementById("chambre5_2");

menuOne.addEventListener("mouseenter", () => {
menuOne.classList.add("bright");
})

menuOne.addEventListener("mouseout", () => {
     menuOne.classList.remove("bright");
     })

menuOne.addEventListener("mousedown", () => {
     menuOne.style.transition = "unset";     
     menuOne.style.scale = "1.2";

          })

menuOne.addEventListener("mouseup", () => {
               menuOne.style.scale = "1";
               })

menuTwo.addEventListener("mouseenter", () => {
     menuTwo.classList.add("bright");
                    })
                    
menuTwo.addEventListener("mouseout", () => {
     menuTwo.classList.remove("bright");
                         })
                    
menuTwo.addEventListener("mousedown", () => {
                         menuTwo.style.transition = "unset";     
                         menuTwo.style.scale = "1.2";
                    
                              })
                    
menuTwo.addEventListener("mouseup", () => {
                                   menuTwo.style.scale = "1";
                                   })               

menuThree.addEventListener("mouseenter", () => {
                                        menuThree.classList.add("bright");
                                        })
                                        
                                        menuThree.addEventListener("mouseout", () => {
                                             menuThree.classList.remove("bright");
                                             })
                                        
                                        menuThree.addEventListener("mousedown", () => {
                                             menuThree.style.transition = "unset";     
                                             menuThree.style.scale = "1.2";
                                        
                                                  })
                                        
                                        menuThree.addEventListener("mouseup", () => {
                                                       menuThree.style.scale = "1";
                                                       })
                                                       

menuFour.addEventListener("mouseenter", () => {
     menuFour.classList.add("bright");
})
                                                            
menuFour.addEventListener("mouseout", () => {
     menuFour.classList.remove("bright");
})
                                                            
menuFour.addEventListener("mousedown", () => {
     menuFour.style.transition = "unset";     
     menuFour.style.scale = "1.2";
                                                            
 })
                                                            
menuFour.addEventListener("mouseup", () => {
     menuFour.style.scale = "1";
})


window.addEventListener('resize', niceOne)


function niceOne() {
     if ($(window).innerWidth() >= 700 && blockOneB.classList.contains("active")) {
          blockOne.classList.add("active");
            blockOne.style.transition = "0s";
            blockOne.style.animation = "0s"
            blockOneB.classList.remove("active");
            blockOneB.style.transition = "0s";
     }

     else if ($(window).innerWidth() < 700 && blockOne.classList.contains("active")) {
          blockOne.classList.remove("active");
          blockOne.style.transition = "Os";
          blockOneB.classList.add("active");
          blockOneB.style.transition = "0s";
          blockOneB.style.animation = "0s";

     }

     else if ($(window).innerWidth() >= 700 && blockTwoB.classList.contains("active")) {
          blockTwo.classList.add("active");
          blockTwo.style.transition = "0s";
          blockTwo.style.animation = "0s"
          blockTwoB.classList.remove("active");
          blockTwoB.style.transition = "0s"
     }

     else if ($(window).innerWidth() < 700 && blockTwo.classList.contains("active")) {
          blockTwo.classList.remove("active");
          blockTwo.style.transition = "Os";
          blockTwoB.classList.add("active");
          blockTwoB.style.transition = "0s";
          blockTwoB.style.animation = "0s";

     }

     else if ($(window).innerWidth() >= 700 && blockThreeB.classList.contains("active")) {
          blockThree.classList.add("active");
          blockThree.style.transition = "0s";
          blockThree.style.animation = "0s"
          blockThreeB.classList.remove("active");
          blockThreeB.style.transition = "0s"
     }

     else if ($(window).innerWidth() < 700 && blockThree.classList.contains("active")) {
          blockThree.classList.remove("active");
          blockThree.style.transition = "Os";
          blockThreeB.classList.add("active");
          blockThreeB.style.transition = "0s";
          blockThreeB.style.animation = "0s";

     }

     else if ($(window).innerWidth() >= 700 && blockFourB.classList.contains("active")) {
          blockFour.classList.add("active");
          blockFour.style.transition = "0s";
          blockFour.style.animation = "0s"
          blockFourB.classList.remove("active");
          blockFourB.style.transition = "0s"
     }

     else if ($(window).innerWidth() < 700 && blockFour.classList.contains("active")) {
          blockFour.classList.remove("active");
          blockFour.style.transition = "Os";
          blockFourB.classList.add("active");
          blockFourB.style.transition = "0s";
          blockFourB.style.animation = "0s";

     }


}

menuOne.addEventListener("click", () => {

     blockTwo.classList.remove("active");
     blockTwoB.classList.remove("active");
     blockTwo.style.transition = "0s";
     blockTwoB.style.transition = "0s";
     blockThree.classList.remove("active");
     blockThreeB.classList.remove("active");
     blockThree.style.transition = "0s";
     blockThreeB.style.transition = "0s";
     blockFour.classList.remove("active");
blockFourB.classList.remove("active");
blockFour.style.transition = "0s";
blockFourB.style.transition = "0s";

         if ($(window).innerWidth() >= 700 && (!blockOne.classList.contains("active") || blockOneB.classList.contains("active"))) {
            blockOne.classList.add("active");
            blockOne.style.transition = "ease 3s";
            blockOne.style.animation = "appear 2s ease-out"
            blockOneB.classList.remove("active");
            blockOneB.style.transition = "0s"

    }

     else if ($(window).innerWidth() < 700 && (!blockOneB.classList.contains("active") || blockOne.classList.contains("active"))) {
        blockOne.classList.remove("active");
        blockOne.style.transition = "Os";
        blockOneB.classList.add("active");
        blockOneB.style.transition = "ease 2s";
        blockOneB.style.animation = "appearSmart 2s ease-out";
     }

     else {
blockOne.classList.remove("active");
blockOneB.classList.remove("active");
blockOne.style.transition = "0s";
blockOneB.style.transition = "0s";

     }

});

function openTwo(){

     blockOne.classList.remove("active");
     blockOneB.classList.remove("active");
     blockOne.style.transition = "0s";
     blockOneB.style.transition = "0s";
     blockThree.classList.remove("active");
     blockThreeB.classList.remove("active");
     blockThree.style.transition = "0s";
     blockThreeB.style.transition = "0s";
     blockFour.classList.remove("active");
blockFourB.classList.remove("active");
blockFour.style.transition = "0s";
blockFourB.style.transition = "0s";


     if ($(window).innerWidth() >= 700 && (!blockTwo.classList.contains("active") || blockTwoB.classList.contains("active"))) {
        blockTwo.classList.add("active");
        blockTwo.style.transition = "ease 2s";
        blockTwo.style.animation = "appear 2s ease-out"
        blockTwoB.classList.remove("active");
        blockTwoB.style.transition = "0s"

}

 else if ($(window).innerWidth() < 700 && (!blockTwoB.classList.contains("active") || blockTwo.classList.contains("active"))) {
    blockTwo.classList.remove("active");
    blockTwo.style.transition = "Os";
    blockTwoB.classList.add("active");
    blockTwoB.style.transition = "ease 2s";
    blockTwoB.style.animation = "appearSmart 2s ease-out";
 }

 else {
blockTwo.classList.remove("active");
blockTwoB.classList.remove("active");
blockTwo.style.transition = "0s";
blockTwoB.style.transition = "0s";
 }

};

function openThree(){

     blockOne.classList.remove("active");
     blockOneB.classList.remove("active");
     blockOne.style.transition = "0s";
     blockOneB.style.transition = "0s";
     blockTwo.classList.remove("active");
     blockTwoB.classList.remove("active");
     blockTwo.style.transition = "0s";
     blockTwoB.style.transition = "0s";
     blockFour.classList.remove("active");
blockFourB.classList.remove("active");
blockFour.style.transition = "0s";
blockFourB.style.transition = "0s";


     if ($(window).innerWidth() >= 700 && (!blockThree.classList.contains("active") || blockThreeB.classList.contains("active"))) {
        blockThree.classList.add("active");
        blockThree.style.transition = "ease 2s";
        blockThree.style.animation = "appear 2s ease-out"
        blockThreeB.classList.remove("active");
        blockThreeB.style.transition = "0s"

}

 else if ($(window).innerWidth() < 700 && (!blockThreeB.classList.contains("active") || blockThree.classList.contains("active"))) {
    blockThree.classList.remove("active");
    blockThree.style.transition = "Os";
    blockThreeB.classList.add("active");
    blockThreeB.style.transition = "ease 2s";
    blockThreeB.style.animation = "appearSmart 2s ease-out";
 }

 else {
blockThree.classList.remove("active");
blockThreeB.classList.remove("active");
blockThree.style.transition = "0s";
blockThreeB.style.transition = "0s";
 }

};

function openFour(){

     blockOne.classList.remove("active");
     blockOneB.classList.remove("active");
     blockOne.style.transition = "0s";
     blockOneB.style.transition = "0s";
     blockTwo.classList.remove("active");
     blockTwoB.classList.remove("active");
     blockTwo.style.transition = "0s";
     blockTwoB.style.transition = "0s";
     blockThree.classList.remove("active");
     blockThreeB.classList.remove("active");
     blockThree.style.transition = "0s";
     blockThreeB.style.transition = "0s";


     if ($(window).innerWidth() >= 700 && (!blockFour.classList.contains("active") || blockFourB.classList.contains("active"))) {
        blockFour.classList.add("active");
        blockFour.style.transition = "ease 2s";
        blockFour.style.animation = "appear 2s ease-out"
        blockFourB.classList.remove("active");
        blockFourB.style.transition = "0s"

}

 else if ($(window).innerWidth() < 700 && (!blockFourB.classList.contains("active") || blockFour.classList.contains("active"))) {
    blockFour.classList.remove("active");
    blockFour.style.transition = "Os";
    blockFourB.classList.add("active");
    blockFourB.style.transition = "ease 2s";
    blockFourB.style.animation = "appearSmart 2s ease-out";
 }

 else {
blockFour.classList.remove("active");
blockFourB.classList.remove("active");
blockFour.style.transition = "0s";
blockFourB.style.transition = "0s";
 }

};

function minOne() {
numberNights.min = "1";
numberNights.value = "1";
}

function minTwo() {
     numberNights.min = "2";
     numberNights.value = "2";
}

function minThree() {
     numberNights.min ="3";
     numberNights.value = "3";
}