const firstName = document.querySelector(".firstName");
const watch = document.querySelector(".watch");
const day = document.querySelector(".day");
const days = {
    0: "Pazar",
    1: "Pazartesi",
    2: "Salı",
    3: "Çarşamba",
    4: "Perşembe",
    5: "cuma",
    6: "Cumartesi",
}

firstName.textContent = prompt("Adınızı giriniz.");

function showTime() {
    const date = new Date();
    let fullWatch = `${date.getHours()}`.padStart(2, "0") + ":" + `${date.getMinutes()}`.padStart(2, "0") + ":" + `${date.getSeconds()}`.padStart(2, "0");
    watch.textContent = fullWatch;
    day.textContent = days[date.getDay()];
    setTimeout(showTime, 1000);
}

showTime();