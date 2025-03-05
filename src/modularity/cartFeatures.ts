export function addItem(
  itemList: { name: string; price: number }[],
  cartItemsList: { name: string; price: number }[],
  itemName: string
): { name: string; price: number }[] {
  const existingItem = itemList.find((ele) => ele.name === itemName);

  if (existingItem) {
    return [...cartItemsList, existingItem];
  }
  return [...cartItemsList];
}

export function removeItem(
  cartItemsList: { name: string; price: number }[],
  itemName: string
): { name: string; price: number }[] {
  const index = cartItemsList.findIndex((ele) => ele.name === itemName);
  console.log("index : ", index);
  if (index !== -1) {
    const newCart = [...cartItemsList];
    newCart.splice(index, 1);
    return newCart;
  }

  return cartItemsList;
}
