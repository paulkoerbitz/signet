'use strict';

function timerFactory () {
    var max = 0;
    var total = 0;
    var startTime = 0;


    function start() {
        startTime = process.hrtime();
    }

    function stop() {
        total += process.hrtime(startTime);
        console.log(total);
        startTime = 0;
    }

    function getTotal() {
        return total;
    }

    function reset() {
        total = 0;
    }

    function report() {
        if(total > max) {
            console.log('Long run detected: ' + total + 'ms');
        }
    }

    function setMaxAcceptableTime (maxMs) {
        max = maxMs;
    }

    return {
        getTotal: getTotal,
        reset: reset,
        report: report,
        setMaxAcceptableTime: setMaxAcceptableTime,
        start: start,
        stop: stop
    };
}

module.exports = timerFactory;