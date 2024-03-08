

setInterval(() => {
    let date = new Date();
    let hrTime = date.getHours();
    let minTime = date.getMinutes();
    let secTime = date.getSeconds();

    let hRotate = 30 * hrTime + minTime/2;
    let mRotate = 6 * minTime;
    let sRotate = 6 * secTime;

    document.getElementById("hr").style.transform = `rotate(${hRotate}deg)`;
    document.getElementById("min").style.transform = `rotate(${mRotate}deg)`;
    document.getElementById("sec").style.transform = `rotate(${sRotate}deg)`;
    console.log("ji")

}, 1000);