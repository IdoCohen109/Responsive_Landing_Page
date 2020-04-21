//catch elements
const time = document.getElementById("myTime");
const timeAtDay = document.getElementById("timeAtDay");
const headers = document.getElementById("headers");

function getTime() {
    const timer = new Date();
    const hours = timer.getHours();
    changeBgImage(hours);
    console.log(hours);
    const minutes = timer.getMinutes();
    const seconds = timer.getSeconds();
    time.innerHTML = `${modifyHours(hours)}:${addZeros(minutes)}:${addZeros(seconds)} ${checkAmPm(hours)}`;
    setTimeout(getTime, 1000);
}

function modifyHours(modifiedHours) {
    if (modifiedHours > 12) {
        modifiedHours = modifiedHours % 12;
        return '0' + modifiedHours;
    } else {
        return modifiedHours;
    }
}


function checkAmPm(hours) {

    if (hours < 12) {
        return 'AM'
    } else {
        return 'PM';
    }
}

function addZeros(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

function changeBgImage(hours) {
    hours = 6;
    if ((hours > 12) && (hours < 18)) {
        document.body.style.backgroundImage = "url('noon.jpg')";
        timeAtDay.innerHTML = "Afternoon";
        time.style.color = "silver";
        headers.style.color = "silver";
        headers.style.textShadow = "5px 5px black";
        time.style.textShadow = "5px 5px black";
    } else if ((hours >= 18) && (hours <= 20)) {
        document.body.style.backgroundImage = "url('afternoon.jpg')";
        timeAtDay.innerHTML = "Evening";

    } else if (hours > 20) {
        document.body.style.backgroundImage = "url('night.jpg')";
        timeAtDay.innerHTML = "Night";
        headers.style.color = "white";
        time.style.color = "white";
    } else {
        document.body.style.backgroundImage = "url('morning.jpg')";
        timeAtDay.innerHTML = "Morning";
    }
}



getTime();