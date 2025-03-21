window.onload = function(){
    var seconds = 0;
    var tens = 0;
    var OutputSeconds = document.getElementById("second");
    var OutputTens = document.getElementById("tens");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
    });

    function startTimer() {
        tens++;

        if (tens < 10) {
            OutputTens.innerHTML = "0" + tens;
        } else {
            OutputTens.innerHTML = tens;
        }

        if (tens >= 100) {
            seconds++;
            tens = 0;

            OutputTens.innerHTML = "00";
            OutputSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        }
    }
}
