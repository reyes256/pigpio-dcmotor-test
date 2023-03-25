const Gpio = require('pigpio').Gpio;

const input1 = new Gpio(14, {mode: Gpio.OUTPUT});
const input2 = new Gpio(15, {mode: Gpio.OUTPUT});

setTimeout(() => {
    input1.digitalWrite(0);
    input2.digitalWrite(1);
}, 1000)

setTimeout(() => {
    input1.digitalWrite(1);
    input2.digitalWrite(0);
}, 5000)

setTimeout(() => {
    input1.digitalWrite(0);
    input2.digitalWrite(0);
}, 5000)

process.on("SIGTERM", () => {
    Gpio.waveClear();
})