const clock = document.querySelector("#clock")

setInterval(function () {
    let date = new Date();
    // console.log(date);
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

// const clock = document.getElementById('clock');

// setInterval(function () {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000)