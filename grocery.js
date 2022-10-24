var Grocery = /** @class */ (function () {
    function Grocery(name, SKUNumber, quantity, price) {
        this.name = name;
        this.SKUNumber = SKUNumber;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var milk = new Grocery("Milk", "12345", "1", "3.49");
var bread = new Grocery("Bread", "12346", "2", "2.99");
var eggs = new Grocery("Eggs", "12347", "1", "3.99");
console.log(milk);
console.log(bread);
console.log(eggs);
var items = document.getElementById("items");
var p = document.createElement("p");
p.textContent = milk.name;
items === null || items === void 0 ? void 0 : items.appendChild(p);
