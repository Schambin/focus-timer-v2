import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

// Função para iniciar ou parar o timer
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countDown();
}

// Função para resetar o timer
export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}

// Função para adicionar 5 minutos ao timer
export function moreTime() {
    let currentMinutes = state.minutes;
    let newMinutes = Math.min(currentMinutes + 5, 60);
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
}

// Função para reduzir 5 minutos do timer
export function minusTime() {
    let currentMinutes = state.minutes;
    let newMinutes = Math.max(currentMinutes - 5, 0);
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
}

// Função para alternar a reprodução de música
export function toggleMusic() {
    state.isMuted = document.documentElement.classList.toggle('music-on');

    if (state.isMuted) {
        sounds.bgAudio.play();
    } else {
        sounds.bgAudio.pause();
    }
}

// Função para iniciar a reprodução da música correspondente ao botão clicado
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