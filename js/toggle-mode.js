let lightMode = true;
const toggleLightOrDark = document.getElementById('toggleMode');

toggleLightOrDark.addEventListener('click', (e) => {
    let html = document.documentElement.classList.contains(lightMode ? 'dark' : 'light');

    if (html === false) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
});