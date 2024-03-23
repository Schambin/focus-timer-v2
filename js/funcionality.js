import state from './focusTimer/state.js';
import * as events from './focusTimer/events.js';
import * as timer from './focusTimer/timer.js';

export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();

    events.registerControls();
}