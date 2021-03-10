
export const FoodTruck = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Base Dish</h2>

            </section>
            <section class="choices__sizes options">
                <h2>Vegetable</h2>

            </section>
            <section class="choices__styles options">
                <h2>Protein</h2>

            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}
