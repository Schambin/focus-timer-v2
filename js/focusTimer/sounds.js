// Songs, sounds and logic behind them
import state from './state.js';
import { musicTypes } from './elements.js'

export const chillSong = new Audio('../src/songs/Heart-Of-The-Ocean(chosic.com).mp3');
export const rainySong = new Audio('../src/songs/purrple-cat-time-to-think(chosic.com).mp3');
export const coffeeSong = new Audio('../src/songs/Morning-Routine-Lofi-Study-Music(chosic.com).mp3');
export const campSong = new Audio('../src/songs/Fire-Crackle-and-Flames-1(chosic.com).mp3');

export const buttonPress = new Audio('../src/songs/buttonPress.wav');
export const endTimerDing = new Audio('../src/songs/ding.mp3');

export function toggleMuteState(buttonId) {
    const button = document.getElementById(buttonId);

    if (button) {
        button.addEventListener('click', () => {
            const buttons = musicTypes;
            buttons.forEach(otherButton => {
                // check if some of the buttons already selected, remove if yes.
                otherButton.classList.remove('selected');
            });

            if (!chillSong.paused || !rainySong.paused || !coffeeSong.paused || !campSong.paused) {
                state.isMuted = true;
            } else {
                state.isMuted = !state.isMuted;
            }

            chillSong.pause();
            rainySong.pause();
            coffeeSong.pause();
            campSong.pause();

            if (!state.isMuted) {
                if (buttonId === 'chillSongButton') {
                    chillSong.play();
                    chillSong.loop = true;
                } else if (buttonId === 'rainySongButton') {
                    rainySong.play();
                    rainySong.loop = true;
                } else if (buttonId === 'coffeeSongButton') {
                    coffeeSong.play();
                    coffeeSong.lop = true;
                } else if (buttonId === 'campingSongButton') {
                    campSong.play();
                    campSong.loop = true;
                }
                button.classList.add('selected');
            }
        });
    }
}


toggleMuteState('chillSongButton');
toggleMuteState('rainySongButton');
toggleMuteState('coffeeSongButton');
toggleMuteState('campingSongButton');