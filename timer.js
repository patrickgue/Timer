function Time(h,m,s) {
    let self = this;

    self.h = h;
    self.m = m;
    self.s = s;

    self.subtractSecond = function() {
        if(self.m == 0 && self.s == 0) {
            self.h -= 1;
            self.m = 60;
        }
        if(self.s == 0) {
            self.m -= 1;
            self.s = 60;
        }

        self.s--;

    }

    self.getString = function() {
        return (self.h > 9 ? "" : "0") + self.h + ":"
            + (self.m > 9 ? "" : "0") + self.m + ":"
            + (self.s > 9 ? "" : "0") + self.s
    }

}

function parseTime(timeString) {
    let splited = timeString.split(":");
    let time;
    try {
        time = new Time(
            parseInt(splited[0]),
            parseInt(splited[1]),
            parseInt(splited[2]));
        
    }
    catch(e) {
        alert("Invalid time format" )
        return new Time(0,0,0);
    }
    return time;
}

(function() {
    const timerInput = document.getElementById("timer");
    
    const startButton = document.getElementById("start");
    const pauseButton = document.getElementById("pause");
    const resetButton = document.getElementById("reset");
    
    const quitButton = document.getElementById("quit");

    let interval = -1;
    let timer;

    startButton.addEventListener("click", function() {
        timer = parseTime(timerInput.value);

        interval = setInterval(function() {
            timer.subtractSecond();
            timerInput.value = timer.getString();
            if(timer.h == 0 && timer.m == 0 && timer.s == 0) {
                clearInterval(interval);
                timer = new Time(0,0,0);
                timerInput.value = "";
                alert("Timer finished");
            }
        }, 1000);
    });

    pauseButton.addEventListener("click", function() {
        clearInterval(interval);
    });

    resetButton.addEventListener("click", function() {
        clearInterval(interval);
        timer = new Time(0,0,0);
        timerInput.value = "";
    });


    quitButton.addEventListener("click", function() {
        window.close();
    });
    
})();