setInterval(() => {
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();

    let sec = document.querySelector('.seconds_dot');
    let min = document.querySelector('.minutes_dot');
    let hr = document.querySelector('.hours_dot');

    sec.style.transform = `rotate(${s * 6}deg)`;//360/60=6
    min.style.transform = `rotate(${m * 6}deg)`;//360/60=6
    hr.style.transform = `rotate(${h * 30}deg)`;//360/12=30

});