import { Sides } from "./SideDishes.js"

export const FoodTruck = () => {
    return `
        <h1>Laura Kathryn's House of Hummus</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Base Dish</h2>

            </section>
            <section class="choices__sizes options">
                <h2>Vegetable</h2>

            </section>
            <section class="choices__styles options">
                <h2>Sides</h2>
                ${Sides()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
}
