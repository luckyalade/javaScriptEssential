const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$22.99', 'Oatmeal -$12.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak -$20.22', 'Pasta -12.73', 'Burger -11.54', 'Salmon -30-12'];
const dessertMenu = ['Cake -$12.90', 'Ice Cream -$19.24', 'Pudding -$21.00', 'Fruit Salad -$23.12'];

let breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item: ${index + 1}: ${item}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItems = '';

for (let i = 0; i < dessertMenu.length; i++) {
    dessertItems += `<p>Items ${i + 1}: ${dessertMenu[i]}</p>`;
    document.getElementById("dessertMenuItems").innerHTML = dessertItems;
}