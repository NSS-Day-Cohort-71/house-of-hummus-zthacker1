import { getSides, setSide } from "./database.js"

const sideDishes = getSides()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "sideDish") {
            setSide(parseInt(event.target.value))
        }
    }
)

export const Sides = () => {
    let html = "<ul>"

    const listItems = sideDishes.map(dish => {
        return `<li>
            <input type="radio" name="sideDish" value="${dish.id}" /> ${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

