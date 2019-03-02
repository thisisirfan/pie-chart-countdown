var options = {
    scaleColor: false,
    trackColor: 'rgba(255,255,255,0.3)',
    barColor: '#E7F7F5',
    lineWidth: 6,
    lineCap: 'butt',
    size: 95
};

var charts = [];
window.addEventListener('DOMContentLoaded', function() {

    [].forEach.call(document.querySelectorAll('.chart'), function(el) {
        charts.push(new EasyPieChart(el, options));
        console.log(charts)
    });
});

var days, hours, minutes, seconds;

function countdown(endDate, isFirst) {
    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
        return;
    }

    var timeId = setInterval(function() {
        calculate(endDate)
    }, 1000);
}

function calculate(endDate) {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);

        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);

        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);

        seconds = parseInt(timeRemaining);

        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

        charts[0].update(0.27 * days)
        charts[1].update(1.66 * hours)
        charts[2].update(1.66 * minutes)
        charts[3].update(1.66 * seconds)
    }
}

let endTime = 'Nov 15, 2019 15:00:00';
let countdownTime = new Date(endTime).getTime();
countdown(countdownTime);