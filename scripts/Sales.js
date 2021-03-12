import { getEntrees, getPurchases, getSides, getVeggies } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()
    const entrees = getEntrees()
    const sides = getSides()

    const v = veggies.find(m => m.id === order.veggieId).price
    const e = entrees.find(e => e.id === order.entreeId).price
    const s = sides.find(s => s.id === order.sideId).price

    const total = v + e + s

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = () => {
    const sales = getPurchases()
    return `
        <ul>
            ${sales.map(buildOrderListItem).join("")}
        </ul>
    `
}

