import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as FocusTimer from '../funcionality.js'

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

// Função para adicionar tempo ao timer
export function moreTime() {

}

// Função para reduzir o tempo do timer
export function minusTime() {

}