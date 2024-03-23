import state from './state.js';
import * as timer from './timer.js';
import { buttonPress, endTimerDing } from './elements.js';

// func to start n stop timer
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countDown();
    buttonPress.play();
}

// reset timer
export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    buttonPress.play();
}

// add 5 minutes to timer
export function moreTime() {
    let currentMinutes = state.minutes;
    let newMinutes = Math.min(currentMinutes + 5, 60);
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
    buttonPress.play();
}

//reduce 5 minutes from timer
export function minusTime() {
    let currentMinutes = state.minutes;
    let newMinutes = Math.max(currentMinutes - 5, 0);
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
    buttonPress.play();
}