//Buttons of control, music and timer
export const controls = document.querySelector('.controls');
export const minutes = document.getElementById('minutes');
export const seconds = document.getElementById('seconds');
export const musicTypes = document.querySelectorAll('.musicTypes button');

//Songs and sounds
export const chillSong = new Audio('../src/songs/Heart-Of-The-Ocean(chosic.com).mp3');
export const rainySong = new Audio('../src/songs/purrple-cat-time-to-think(chosic.com).mp3');
export const coffeeSong = new Audio('../src/songs/Morning-Routine-Lofi-Study-Music(chosic.com).mp3');
export const campSong = new Audio('../src/songs/Fire-Crackle-and-Flames-1(chosic.com).mp3');

export const buttonPress = new Audio('../src/songs/buttonPress.wav');
export const endTimerDing = new Audio('../src/songs/ding.mp3');
