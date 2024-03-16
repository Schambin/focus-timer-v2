import { controls } from "./elements.js"

//eventos de clique na aplicação
export function registerControls() {
    controls.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target)
    })
}