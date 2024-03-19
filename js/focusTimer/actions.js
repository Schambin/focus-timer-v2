import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import { start } from '../funcionality.js'

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
    let newMinutes = currentMinutes + 5;
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
}

// Função para reduzir 5 minutos do timer
export function minusTime() {
    let currentMinutes = state.minutes;
    // Garante que o valor mínimo de minutos seja 0
    let newMinutes = Math.max(currentMinutes - 5, 0);
    state.minutes = newMinutes;
    timer.updateDisplay(newMinutes, state.seconds);
}
