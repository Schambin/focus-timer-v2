import state from './state.js';

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
            if (!chillSong.paused || !rainySong.paused || !coffeeSong.paused || !campSong.paused) {
                state.isMuted = true;
            } else {
                state.isMuted = !state.isMuted;
            }

            chillSong.pause();
            button.classList.remove('selected')
            rainySong.pause();
            button.classList.remove('selected')
            coffeeSong.pause();
            button.classList.remove('selected')
            campSong.pause();

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