import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "entree") {
            setEntree(parseInt(event.target.value))
        }
    }
)

export const Entrees = () => {
    let html = "<ul>"

    const listItems = entrees.map(entree => {
        return `<li>
            <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

