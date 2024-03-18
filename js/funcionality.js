import state from "./focusTimer/state.js"
import * as events from './focusTimer/events.js'

//ações a fazer de acordo com o estado da aplicação (state.js)
export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    events.registerControls()
}