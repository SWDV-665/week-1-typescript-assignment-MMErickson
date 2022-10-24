
interface Groceries {
    name: string;
    SKUNumber: string;
    quantity: string;
    price: string;
}

class Grocery {
    name: string;
    SKUNumber: string;
    quantity: string;
    price: string;

    constructor(name: string, SKUNumber: string, quantity: string, price: string) {
        this.name = name;
        this.SKUNumber = SKUNumber;
        this.quantity = quantity;
        this.price = price;
    }
}

const milk: Groceries = new Grocery("Milk", "12345", "1", "3.49");
const bread: Groceries = new Grocery("Bread", "12346", "2", "2.99");
const eggs: Groceries = new Grocery("Eggs", "12347", "1", "3.99");

console.log(milk);
console.log(bread);
console.log(eggs);

const items = document.getElementById("items");
const p = document.createElement("p");
p.textContent = milk.name;
items?.appendChild(p);

