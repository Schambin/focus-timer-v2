import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

// start or pause timer
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countDown();
    sounds.buttonPress.play();
}

// reset timer
export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPress.play();
}

// add 5 minutes to timer
export function moreTime() {
    let currentMinutes = state.minutes;
    let newMinutes = Math.min(currentMinutes + 5, 60);
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
    sounds.buttonPress.play();
}

// reduce 5 minutes on timer
export function minusTime() {
    let currentMinutes = state.minutes;
    let newMinutes = Math.max(currentMinutes - 5, 0);
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
    sounds.buttonPress.play();
}

// change reproduction
export function toggleMusic() {
    state.isMuted = document.documentElement.classList.toggle('music-on');

    if (state.isMuted) {
        sounds.bgAudio.play();
    } else {
        sounds.bgAudio.pause();
    }
}

// start song according to button
export function startSong(song) {
    if (song === 'startChillSong') {
        sounds.chillSong.play();
    } else if (song === 'startRainySong') {
        sounds.rainySong.play();
    } else if (song === 'startCoffeeSong') {
        sounds.coffeeSong.play();
    } else if (song === 'startCampSong') {
        sounds.campSong.play();
    } else {
        console.log(`Botão não reconhecido: ${song}`);
    }
}