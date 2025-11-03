let kitty_img = document.getElementById("kitty");
let outfit = document.getElementById("outfit");
let blush = document.getElementById("blush");
let eye = document.getElementById("eye");
let c_sound = new Audio("click.wav");
let outfits = ["images/pink dress 2.png",
    "images/pink dress.png",
    "images/red outfit.png",
    "images/blue dress.png"
]

let eyeshadows = [
    "images/pink eye.png",
    "images/red eye.png",
    "images/blue blush.png",
    ""
];

let blushes = [
    "images/pink blush.png",
    "images/red blush.png",
    ""
]

let next_btn = document.getElementById("next_btn");
let prev_btn = document.getElementById("prev_btn");
let next_btn_e = document.getElementById("next_btn_e");
let prev_btn_e = document.getElementById("prev_btn_e");
let next_btn_b = document.getElementById("next_btn_b");
let prev_btn_b = document.getElementById("prev_btn_b");
let current_outfit =  -1;
let current_eye =  -1;
let current_blush =  -1;




next_btn.addEventListener("click",()=>{
    current_outfit = (current_outfit+1)%outfits.length;
    outfit.src = outfits[current_outfit];
    c_sound.play();
});

prev_btn.addEventListener("click",()=>{
    current_outfit = (current_outfit-1+outfits.length)%outfits.length;
    outfit.src = outfits[current_outfit];
    c_sound.play();
});

next_btn_e.addEventListener("click",()=>{
    current_eye = (current_eye+1)%eyeshadows.length;
    eye.src = eyeshadows[current_eye];
    c_sound.play();
});


prev_btn_e.addEventListener("click", () => {
    current_eye = (current_eye - 1 + eyeshadows.length) % eyeshadows.length;
    eye.src = eyeshadows[current_eye];
    c_sound.play();
});


next_btn_b.addEventListener("click", () => {
    current_blush = (current_blush + 1) % blushes.length;
    blush.src = blushes[current_blush];
    c_sound.play();
});

prev_btn_b.addEventListener("click", () => {
    current_blush = (current_blush - 1 + blushes.length) % blushes.length;
    blush.src = blushes[current_blush];
    c_sound.play();
});

document.addEventListener("keydown",(e)=>{
    if(e.code == "ArrowRight"){
        current_outfit = (current_outfit+1)%outfits.length;
        outfit.src = outfits[current_outfit];

        current_eye = (current_eye+1)%eyeshadows.length;
        eye.src = eyeshadows[current_eye];

        current_blush = (current_blush + 1) % blushes.length;
        blush.src = blushes[current_blush];

        c_sound.play();
    }
    else if(e.code=="ArrowLeft"){
        current_outfit = (current_outfit-1+outfits.length)%outfits.length;
        outfit.src = outfits[current_outfit];

        current_eye = (current_eye - 1 + eyeshadows.length) % eyeshadows.length;
        eye.src = eyeshadows[current_eye];

        current_blush = (current_blush - 1 + blushes.length) % blushes.length;
        blush.src = blushes[current_blush];

        c_sound.play();
    }
});