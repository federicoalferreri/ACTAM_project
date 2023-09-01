const rows = document.querySelector(".sequencer").children;

const kick = new Audio('sounds/Kick.wav'),
    clap = new Audio('sounds/Clap.wav'),
    hihat = new Audio("sounds/HiHat.wav"),
    snare = new Audio("sounds/Snare.wav"),
    perc = new Audio("sounds/Perc.wav"),
    shaker = new Audio("sounds/Shaker.wav"),
    kick2= new Audio("sounds/CrunchKick.wav"),
    clap2= new Audio("sounds/ClackClap.wav"),
    hihat2= new Audio("sounds/ClackOpenHiHat.wav"),
    snare2= new Audio("sounds/ClackSnare.wav"),
    perc2= new Audio("sounds/CrunchLowPerc.wav"),
    shaker2= new Audio("sounds/VHSShaker.wav");

const item = document.querySelectorAll(".sample");

// Checkbtn toggle functionality
item.forEach(function (el) {
    el.onclick = function () {
        if(el.className.includes("kick")){
            if (el.classList.contains("item-selected1")) {
                el.classList.remove("item-selected1");
            } else {
                el.classList.add("item-selected1");
            }
        }else if(el.className.includes("clap")){
            if (el.classList.contains("item-selected2")) {
                el.classList.remove("item-selected2");
            } else {
                el.classList.add("item-selected2");
            }
        }else if(el.className.includes("hihat")){
            if (el.classList.contains("item-selected3")) {
                el.classList.remove("item-selected3");
            } else {
                el.classList.add("item-selected3");
            }
        }else if(el.className.includes("snare")){
            if (el.classList.contains("item-selected4")) {
                el.classList.remove("item-selected4");
            } else {
                el.classList.add("item-selected4");
            }
        }else if(el.className.includes("perc")){
            if (el.classList.contains("item-selected5")) {
                el.classList.remove("item-selected5");
            } else {
                el.classList.add("item-selected5");
            }
        }else if(el.className.includes("shaker")){
            if (el.classList.contains("item-selected6")) {
                el.classList.remove("item-selected6");
            } else {
                el.classList.add("item-selected6");
            }
        }
    }}    );

// Clear button functionality
document.getElementById("reset-track").onclick = function () {
    [].forEach.call(item, function (el) {
        el.classList.remove("item-selected1");
        el.classList.remove("item-selected2");
        el.classList.remove("item-selected3");
        el.classList.remove("item-selected4");
        el.classList.remove("item-selected5");
        el.classList.remove("item-selected6");
    });
}


// Sample pad key press functionality
let freq=440;
document.onkeydown = function (e) {
    e = e || window.event;

    switch (e.key) {
        case "e":
            freq=277.18;
            document.getElementById("1").classList.add("pressed");
            break;
        case "r":
            freq=311.13;
            document.getElementById("2").classList.add("pressed");
            break;
        case "y":
            freq=369.99;
            document.getElementById("3").classList.add("pressed");
            break;
        case "u":
            freq=415.30;
            document.getElementById("4").classList.add("pressed");
            break;
        case "i":
            freq=466.16;
            document.getElementById("5").classList.add("pressed");
            break;
        case "p":
            freq=554.37;
            document.getElementById("6").classList.add("pressed");
            break;
        case "s":
            freq=261.63;
            document.getElementById("7").classList.add("pressed");
            break;
        case "d":
            freq=293.66;
            document.getElementById("8").classList.add("pressed");
            break;
        case "f":
            freq=329.63;
            document.getElementById("9").classList.add("pressed");
            break;
        case "g":
            freq=349.23;
            document.getElementById("10").classList.add("pressed");
            break;
        case "h":
            freq=392.00;
            document.getElementById("11").classList.add("pressed");
            break;
        case "j":
            freq=440.00;
            document.getElementById("12").classList.add("pressed");
            break;
        case "k":
            freq=493.88;
            document.getElementById("13").classList.add("pressed");
            break;
        case "l":
            freq=523.25;
            document.getElementById("14").classList.add("pressed");
            break;
    }
    if (isPlaying){
        playCurrentNote();
    }
}

document.onkeyup = function (e) {
    e = e || window.event;

    switch (e.key) {
        case "e":
            document.getElementById("1").classList.remove("pressed");
            break;
        case "r":
            document.getElementById("2").classList.remove("pressed");
            break;
        case "y":
            document.getElementById("3").classList.remove("pressed");
            break;
        case "u":
            document.getElementById("4").classList.remove("pressed");
            break;
        case "i":
            document.getElementById("5").classList.remove("pressed");
            break;
        case "p":
            document.getElementById("6").classList.remove("pressed");
            break;
        case "s":
            document.getElementById("7").classList.remove("pressed");
            break;
        case "d":
            document.getElementById("8").classList.remove("pressed");
            break;
        case "f":
            document.getElementById("9").classList.remove("pressed");
            break;
        case "g":
            document.getElementById("10").classList.remove("pressed");
            break;
        case "h":
            document.getElementById("11").classList.remove("pressed");
            break;
        case "j":
            document.getElementById("12").classList.remove("pressed");
            break;
        case "k":
            document.getElementById("13").classList.remove("pressed");
            break;
        case "l":
            document.getElementById("14").classList.remove("pressed");
            break;
    }
}

// BPM slider
const bpmSlider = document.getElementById("bpm-slider");
const bpmText = document.getElementById("bpm");
var BPM = bpmSlider.value;

bpmText.innerHTML = bpmSlider.value + " BPM";

bpmSlider.oninput = function () {
    bpmText.innerHTML = this.value + " BPM";
    BPM = parseInt(((60 / bpmSlider.value) * 1000) / 4);
}

let kickname = "KICK";
document.getElementById('k').addEventListener('change', function() {
    kickname = document.getElementById('k').value;
});
let clapname = "CLAP";
document.getElementById('cl').addEventListener('change', function() {
    clapname = document.getElementById('cl').value;
});
let hihatname = "HIHAT";
document.getElementById('hh').addEventListener('change', function() {
    hihatname = document.getElementById('hh').value;
});
let snarename = "SNARE";
document.getElementById('sn').addEventListener('change', function() {
    snarename = document.getElementById('sn').value;
});
let percname = "PERC";
document.getElementById('pe').addEventListener('change', function() {
    percname = document.getElementById('pe').value;
});
let shakername = "SHAKER";
document.getElementById('sh').addEventListener('change', function() {
    shakername = document.getElementById('sh').value;
});

let c;
c= document.querySelector(".btn1").childNodes;
console.log(c);
let i = -1;
rowLoop = () => {
    setTimeout(function () {
        i++;

        if (i === rows.length) {
            i = 0;
            document.querySelector(".btn16").childNodes[1].classList.remove("row-highlight1");
            document.querySelector(".btn16").childNodes[3].classList.remove("row-highlight2");
            document.querySelector(".btn16").childNodes[5].classList.remove("row-highlight3");
            document.querySelector(".btn16").childNodes[7].classList.remove("row-highlight4");
            document.querySelector(".btn16").childNodes[9].classList.remove("row-highlight5");
            document.querySelector(".btn16").childNodes[11].classList.remove("row-highlight6");
        }

        document.querySelector(".btn" + (i + 1)).childNodes[1].classList.add("row-highlight1");
        document.querySelector(".btn" + (i + 1)).childNodes[3].classList.add("row-highlight2");
        document.querySelector(".btn" + (i + 1)).childNodes[5].classList.add("row-highlight3");
        document.querySelector(".btn" + (i + 1)).childNodes[7].classList.add("row-highlight4");
        document.querySelector(".btn" + (i + 1)).childNodes[9].classList.add("row-highlight5");
        document.querySelector(".btn" + (i + 1)).childNodes[11].classList.add("row-highlight6");

        if (i > 0) {
            document.querySelector(".btn" + i).childNodes[1].classList.remove("row-highlight1");
            document.querySelector(".btn" + i).childNodes[3].classList.remove("row-highlight2");
            document.querySelector(".btn" + i).childNodes[5].classList.remove("row-highlight3");
            document.querySelector(".btn" + i).childNodes[7].classList.remove("row-highlight4");
            document.querySelector(".btn" + i).childNodes[9].classList.remove("row-highlight5");
            document.querySelector(".btn" + i).childNodes[11].classList.remove("row-highlight6");
        }

        document.querySelectorAll(".btn" + (i + 1)).forEach(function (bruh) {
            if (bruh.childNodes[1].classList.contains("row-highlight1") && bruh.childNodes[1].classList.contains("item-selected1")) {
                if(kickname==="KICK"){
                    kick.load();
                    kick.play();
                }else{
                    kick2.load();
                    kick2.play();
                }
            }

            if (bruh.childNodes[3].classList.contains("row-highlight2") && bruh.childNodes[3].classList.contains("item-selected2")) {
                if(clapname==="CLAP"){
                    clap.load();
                    clap.play();
                }else{
                    clap2.load();
                    clap2.play();
                }
            }

            if (bruh.childNodes[5].classList.contains("row-highlight3") && bruh.childNodes[5].classList.contains("item-selected3")) {
                if(hihatname==="HIHAT"){
                    hihat.load();
                    hihat.play();
                }else{
                    hihat2.load();
                    hihat2.play();
                }
            }

            if (bruh.childNodes[7].classList.contains("row-highlight4") && bruh.childNodes[7].classList.contains("item-selected4")) {
                if(snarename==="SNARE"){
                    snare.load();
                    snare.play();
                }else{
                    snare2.load();
                    snare2.play();
                }
            }
            if (bruh.childNodes[9].classList.contains("row-highlight5") && bruh.childNodes[9].classList.contains("item-selected5")) {
                if(percname==="PERC"){
                    perc.load();
                    perc.play();
                }else{
                    perc2.load();
                    perc2.play();
                }
            }
            if (bruh.childNodes[11].classList.contains("row-highlight6") && bruh.childNodes[11].classList.contains("item-selected6")) {
                if(shakername==="SHAKER"){
                    shaker.load();
                    shaker.play();
                }else{
                    shaker2.load();
                    shaker2.play();
                }
            }
        });

        rowLoop();
    }, BPM);
}

//rowLoop() function to run the beat
rowLoop();


var context = new (window.AudioContext || window.webkitAudioContext)();
const masterVolume = context.createGain();
masterVolume.connect(context.destination);
masterVolume.gain.value = 0.5;

//WAVEFORM SELECT
let waveform = "sine";

function setWaveform() {
    let selectElement = document.getElementById('wave');
    waveform = selectElement.value;
}

document.getElementById('wave').addEventListener('change', function() {
    setWaveform();
});

// Envelope
let attackTime = 0.3;
let sustainLevel = 0.8;
let releaseTime = 0.3;
let noteLength = 0.2;

const attackControl = document.querySelector('#attack-control');
const releaseControl = document.querySelector('#release-control');
const noteLengthControl = document.querySelector('#note-length-control');

attackControl.addEventListener('input', function() {
    attackTime = Number(this.value);
});

releaseControl.addEventListener('input', function() {
    releaseTime = Number(this.value);
});

noteLengthControl.addEventListener('input', function() {
    noteLength = Number(this.value);
});


// Vibrato
let vibratoSpeed = 10;
let vibratoAmount = 0;
const vibratoAmountControl = document.querySelector('#vibrato-amount-control');
const vibratoSpeedControl= document.querySelector('#vibrato-speed-control');

vibratoAmountControl.addEventListener('input', function() {
    vibratoAmount = this.value;
})

vibratoSpeedControl.addEventListener('input', function() {
    vibratoSpeed = this.value;
})


// Delay
const delayAmountControl = document.querySelector('#delay-amount-control');
const delayTimeControl= document.querySelector('#delay-time-control');
const feedbackControl= document.querySelector('#feedback-control');
const delay = context.createDelay();
const feedback = context.createGain();
const delayAmountGain = context.createGain();

delayAmountGain.connect(delay)
delay.connect(feedback)
feedback.connect(delay)
delay.connect(masterVolume)


delay.delayTime.value = 0;
delayAmountGain.gain.value = 0;
feedback.gain.value = 0;

delayAmountControl.addEventListener('input', function() {
    delayAmountGain.value = this.value;
})

delayTimeControl.addEventListener('input', function() {
    delay.delayTime.value = this.value;
})

feedbackControl.addEventListener('input', function() {
    feedback.gain.value = this.value;
})


const startButton = document.getElementById("play-track");
const stopButton = document.getElementById("stop-track");
const notes = document.querySelectorAll(".note");
let isPlaying = false;

startButton.onclick = function () {
    if (!isPlaying){
        isPlaying = true;
        notes.forEach(function (e){
            e.classList.add("notes-activated");
        })
    }
}
stopButton.onclick = function () {
    isPlaying = false;
    notes.forEach(function (e){
        e.classList.remove("notes-activated");
    })
}

function playCurrentNote() {
    const osc = context.createOscillator();
    const noteGain = context.createGain();
    noteGain.gain.setValueAtTime(0, 0);
    noteGain.gain.linearRampToValueAtTime(sustainLevel, context.currentTime + noteLength * attackTime);
    noteGain.gain.setValueAtTime(sustainLevel, context.currentTime + noteLength - noteLength * releaseTime);
    noteGain.gain.linearRampToValueAtTime(0, context.currentTime + noteLength);

    lfoGain = context.createGain();
    lfoGain.gain.setValueAtTime(vibratoAmount, 0);
    lfoGain.connect(osc.frequency)

    lfo = context.createOscillator();
    lfo.frequency.setValueAtTime(vibratoSpeed, 0);
    lfo.start(0);
    lfo.stop(context.currentTime + noteLength);
    lfo.connect(lfoGain);

    osc.type = waveform;
    osc.frequency.setValueAtTime(freq, 0);
    osc.start(0);
    osc.stop(context.currentTime + noteLength);
    osc.connect(noteGain);

    noteGain.connect(masterVolume);
    noteGain.connect(delay);
}
