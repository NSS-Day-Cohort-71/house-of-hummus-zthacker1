const database = {
    entrees: [
        { id: 1, name: "Hummus and Hot Sauce", price: 6.00 },
        { id: 2, name: "Chicken Fried Lamb Kabob", price: 14.25 },
        { id: 3, name: "Hot Chicken Greek Salad", price: 10.50 },
        { id: 4, name: "Brussel Sprout Moussaka", price: 11.50 },
        { id: 5, name: "Okrakopita", price: 8.40 },
        { id: 6, name: "Fried Onion and Grape Leaves", price: 6.95 },
        { id: 7, name: "Chess Baklava", price: 5.30 },
        { id: 8, name: "Gyro Biscuits", price: 8.95 },
        { id: 9, name: "Black Eye Pea Falafel", price: 7.80 },
        { id: 10, name: "Pecan Pastitsio", price: 12.49 }
    ],
    veggies: [
        { id: 1, type: "Okra", price: 405 },
        { id: 2, type: "Collard Greens", price: 782 },
        { id: 3, type: "Swiss Chard", price: 1470 },
        { id: 4, type: "Corn", price: 1997 },
        { id: 5, type: "Brussel Sprouts", price: 3638 },
        { id: 6, type: "Sweet Potatoes", price: 3638 },
        { id: 7, type: "Grits", price: 1258.9 },
        { id: 8, type: "Fried Green Tomatoes", price: 3638 }
    ],
    sides: [
        { id: 1, title: "Chicken Fried Steak", price: 12.45 },
        { id: 2, title: "Bacon", price: 2.95 },
        { id: 3, title: "Turkey Leg", price: 8.80 },
        { id: 4, title: "Ribs", price: 9.25 },
        { id: 5, title: "Catfish", price: 7.75 },
        { id: 6, title: "Souvlaki", price: 10.20 }
    ],
    purchases: [],
    comboChoices: {},
}

export const getPurchases = () => {
    return database.orderBuilder
}

export const getEntrees = () => {
    return [...database.entrees]
}

export const getVeggies = () => {
    return [...database.veggies]
}

export const getSides = () => {
    return [...database.sides]
}

export const addPurchase = () => {
    const newOrder = {...database.comboChoices}
    newOrder.id = [...database.customOrders].pop().id + 1
    database.purchases.push(newOrder)

    database.comboChoices = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
