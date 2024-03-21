import state from "./state.js";

export const chillSong = new Audio('../src/songs/Heart-Of-The-Ocean(chosic.com).mp3');
export const rainySong = new Audio('../src/songs/Heart-Of-The-Ocean(chosic.com).mp3');
export const coffeeSong = new Audio('../src/songs/Heart-Of-The-Ocean(chosic.com).mp3');
export const campSong = new Audio('../src/songs/Heart-Of-The-Ocean(chosic.com).mp3');

const chillSongButton = document.getElementById('chillSongButton')
const rainySongButton = document.getElementById('rainySongButton')
const coffeeSongButton = document.getElementById('coffeeSongButton')
const campingSongButton = document.getElementById('campingSongButton')

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
            }
        });
    }
}

toggleMuteState('chillSongButton');
toggleMuteState('rainySongButton');
toggleMuteState('coffeeSongButton');
toggleMuteState('campingSongButton');