import { addItem, removeItem } from "./modularity/cartFeatures";

const ListItems = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 100 },
  { name: "Mouse", price: 50 },
];

let cart: { name: string; price: number }[] = [];

cart = addItem(ListItems, cart, "Laptop");
cart = addItem(ListItems, cart, "Headphones");
cart = addItem(ListItems, cart, "Headphones");
console.log(cart);

cart = removeItem(cart, "Headphones");

console.log(cart);
