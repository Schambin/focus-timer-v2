import state from './state.js';
import { chillSong, rainySong, coffeeSong, campSong } from './elements.js';

export function toggleMuteState(buttonId) {
    const button = document.getElementById(buttonId);

    if (button) {
        button.addEventListener('click', () => {
            if (!chillSong.paused || !rainySong.paused || !coffeeSong.paused || !campSong.paused) {
                state.isMuted = true;
            } else {
                state.isMuted = !state.isMuted;
            }

            chillSong.pause();
            button.classList.remove('selected');
            rainySong.pause();
            button.classList.remove('selected');
            coffeeSong.pause();
            button.classList.remove('selected');
            campSong.pause();
            button.classList.remove('selected');

            if (!state.isMuted) {
                if (buttonId === 'chillSongButton') {
                    chillSong.play();
                    chillSong.loop = true;
                    button.classList.add('selected')
                } else if (buttonId === 'rainySongButton') {
                    rainySong.play();
                    rainySong.loop = true;
                    button.classList.add('selected')
                } else if (buttonId === 'coffeeSongButton') {
                    coffeeSong.play();
                    coffeeSong.lop = true;
                    button.classList.add('selected')
                } else if (buttonId === 'campingSongButton') {
                    campSong.play();
                    campSong.loop = true;
                    button.classList.add('selected')
                }
            }
        })
    }
}

toggleMuteState('chillSongButton');
toggleMuteState('rainySongButton');
toggleMuteState('coffeeSongButton');
toggleMuteState('campingSongButton');