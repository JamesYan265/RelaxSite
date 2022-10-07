const container = document.querySelector(".container");
const text = document.querySelector("#text");
const musicBoxs = document.querySelector(".musicBox");

let totalTime = 7500;
// 佔圓的比例為2/5
let breathTime = (totalTime/5) * 2;
let holdTime = totalTime / 5;

meditateAnimation();

function meditateAnimation() {
    text.innerHTML = "Breath !";
    container.className = "container grow";
    setTimeout(()=> {
        text.innerHTML = "STOP !";

        setTimeout(() => {
            text.innerHTML = "Relax !"
            container.className = "container shrinl";
        }, holdTime);

    }, breathTime);
}
// setInterval 可以按指定週期重新排程
setInterval(meditateAnimation, totalTime);

//music Box
musicBoxs.volume=0.1
musicBoxs.autoplay=true;
musicBoxs.loop=true;
musicBoxs.load();