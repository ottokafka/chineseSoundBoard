/**
 * Created by automac on 2/16/17.
 */
function playOne(){
    document.getElementById("one").play();
}

function playTwo(){
    document.getElementById("two").play();
}

function playThree(){
    document.getElementById("three").play();
}

function playFour(){
    document.getElementById("four").play();
}
function playFive(){
    document.getElementById("five").play();
}

function playSix(){
    document.getElementById("six").play();
}

function playSeven(){
    document.getElementById("seven").play();
}

function playEight(){
    document.getElementById("eight").play();
}

function playNine(){
    document.getElementById("nine").play();
}
function playTen(){
    document.getElementById("ten").play();
}

//------------------20 and up-----------
function play20(){
    document.getElementById("20").play();
}

function play30(){
    document.getElementById("30").play();
}

function play40(){
    document.getElementById("40").play();
}
function play50(){
    document.getElementById("50").play();
}

function play60(){
    document.getElementById("60").play();
}

function play70(){
    document.getElementById("70").play();
}

function play80(){
    document.getElementById("80").play();
}

function play90(){
    document.getElementById("90").play();
}
function play100(){
    document.getElementById("100").play();
}

function playIam(){
    document.getElementById("iam").play();
}

function playBad(){
    document.getElementById("bad").play();
}

function playGood(){
    document.getElementById("good").play();
}

function playHappy(){
    document.getElementById("happy").play();
}

function playHowAreYou(){
    document.getElementById("howAreYou").play();
}

function playThis(){
    document.getElementById("this").play();
}
function playThat(){
    document.getElementById("that").play();
}

function playImCalled(){
    document.getElementById("imCalled").play();
}

function playMaybe(){
    document.getElementById("maybe").play();
}

function playMaybeNot(){
    document.getElementById("maybeNot").play();
    document.getElementById("maybeNot").volume = 0.5;
}
function playYes(){
    document.getElementById("yes").play();
    document.getElementById("yes").volume = 0.5;
}

function playFuck(){
    document.getElementById("fuck").play();
   document.getElementById("fuck").volume = 0.5;
}

function playNo(){
    document.getElementById("no").play();
    document.getElementById("no").volume = 0.5;
}

function playIdontUnderstand(){
    document.getElementById("idontUnderstand").play();
    document.getElementById("idontUnderstand").volume = 0.5;
}

function playOr(){
   document.getElementById("or").play();
    document.getElementById("or").volume = 0.5;
}



var createAudio = document.createElement("AUDIO");
function playIt(){
    createAudio.setAttribute("src","audio/everyday%20phrases/there.mp3");
    createAudio.play();
    document.body.appendChild(createAudio);
}


function SetVolume(val) {
createAudio.volume = val / 100;

}