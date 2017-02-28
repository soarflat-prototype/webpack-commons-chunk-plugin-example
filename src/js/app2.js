import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

const item1Price = 300;
const item2Price = 200;
const totalPrice = additionCalculator(item1Price, item2Price);
const tax = 1.08;
const priceIncludeTax = taxCalculator(totalPrice, tax);

console.log(priceIncludeTax);
$('body').html(priceIncludeTax);
velocity($('body'), 'fadeOut', {
  duration: 1000
});
