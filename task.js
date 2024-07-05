let time = 60; 

const countdownInterval = setInterval(() => {
    const countDownEl = document.getElementById ("timer");
    if(time >= 0){
        countDownEl.innerHTML = time--;
    } else {
        clearInterval(countdownInterval);
        alert("Вы победили в конкурсе");
    }
}, 1000);