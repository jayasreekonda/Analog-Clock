setInterval(() => {
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();

    let hour = document.getElementById('hours');
    let second = document.getElementById('seconds');
    let minute = document.getElementById('minutes');

    hour.style.strokeDashoffset = 510 - (h * 510) / 12
    minute.style.strokeDashoffset = 630 - (m * 630) / 60
    second.style.strokeDashoffset = 760 - (s * 760) / 60

})