import state from './state.js'
import * as timer from './timer.js'

//Funções da aplicação de acordo com o data- nos botões do html
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countDown()
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running')
}

export function moreTime() {
    console.log('mais tempo no timer')
}

export function minusTime() {
    console.log('menos tempo no timer')
}