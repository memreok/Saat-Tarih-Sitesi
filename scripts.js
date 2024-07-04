function updateClock(){
    const clockNow = new Date();
    const hours = String(clockNow.getHours()).padStart(2,"0");
    const minute = String(clockNow.getMinutes()).padStart(2,"0");
    const second = String( clockNow.getSeconds()).padStart(2,"0");
    const day = String(clockNow.getDay()).padStart(2,"0");
    const month = String(clockNow.getMonth() + 1).padStart(2,"0");
    const year = String(clockNow.getFullYear()).padStart(2,"0");
    const dayOfWeek = clockNow.toLocaleDateString('tr-TR', { weekday: 'long' });

    const timeString = hours + " : " + minute + " : " + second;
    const dateString = day + " / " + month + " / " + year ;
    const dayOfWeekString = dayOfWeek; 

    document.getElementById("saat").innerHTML = timeString;
    document.getElementById("tarih").textContent = dateString;
    document.getElementById("gun").innerHTML = dayOfWeekString;
}

function playTickSound(){
    const ses = document.getElementById("tick-sound");
    ses.currentTime = 0;
    ses.play();
}
setInterval(playTickSound,2000)
setInterval(updateClock,1000);
updateClock;
