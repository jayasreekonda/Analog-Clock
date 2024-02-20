setInterval(() => {
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();

    let sec = document.querySelector('.sec_line');
    let min = document.querySelector('.min_line');
    let hr = document.querySelector('.hr_line');

    sec.style.transform = `rotate(${s * 6}deg)`;//360/60=6
    min.style.transform = `rotate(${m * 6}deg)`;//360/60=6
    hr.style.transform = `rotate(${h * 30}deg)`;//360/12=30

});