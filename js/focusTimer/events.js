import { controls } from "./elements.js"
import * as actions from "./actions.js"

//eventos de clique na aplicação + lógica deles
export function registerControls() {
    controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action
        //se clicar em algum botão = check se existe dentro de actions.js
        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}