import { controls, musicTypes } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action
        if (typeof actions[action] != "function") {
            return;
        }

        actions[action]();
    })
}

export function registerMusicButtons() {
    musicTypes.forEach(button => {
        button.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            actions.startSong(action);
        });
    });
}