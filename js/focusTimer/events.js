import { controls } from "./elements.js"

//eventos de clique na aplicação
export function registerControls() {
    controls.addEventListener('click', (e) => {
        e.preventDefault()
        const action = e.target.dataset.action
        if (action === undefined) {
            return
        }

        console.log(action)
    })
}