const orderCoffee = () => {
  let coffee;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
  }, 3000);
  return coffee;
};
const coffee = orderCoffee();
console.log(coffee);
