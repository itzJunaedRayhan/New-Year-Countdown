let getHours   = document.querySelector(".hours h1");
let getMinutes = document.querySelector(".minutes h1");
let getSeconds = document.querySelector(".seconds h1");
let getDays    = document.querySelector(".days h1");
let endDate    = new Date(2023, 0, 1, 00, 00);
let endTime    = endDate.getTime();


//  add Zero before number, if number less than 10:
let addZeroes = (num) => (num < 10 ? `0${num}` : num);


//  countdown Function:
function countDown () {
    let todatDate = new Date();
    let todayTime = todatDate.getTime();
    let remaining = endTime - todayTime;
    let oneMin    = 60 * 1000;
    let oneHour   = 60 * oneMin;
    let oneDay    = 24 * oneHour;
    if (endTime < todayTime) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = `<h1>Countdown Has Expired</h1>`;
    } else {
        let daysLeft = Math.floor(remaining / oneDay);
        let HourLeft = Math.floor((remaining % oneDay) / oneHour);
        let MinLeft  = Math.floor((remaining % oneHour) / oneMin);
        let SecLeft  = Math.floor((remaining % oneMin) / 1000);

        getDays.textContent    = addZeroes(daysLeft);
        getHours.textContent   = addZeroes(HourLeft);
        getMinutes.textContent = addZeroes(MinLeft);
        getSeconds.textContent = addZeroes(SecLeft)
    }
}

//  Inerval for execute this function after 1 sec left:

let interval = setInterval(countDown, 1000);

//  call the countDown Function:
countDown ();