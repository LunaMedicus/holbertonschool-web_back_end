export function getMenuFromRestaurant(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} menu is ready`);
    }, 1000);
  });
}

export default function loadAllMenus() {
  const p1 = getMenuFromRestaurant('Firuza');
  const p2 = getMenuFromRestaurant('Shirvanshah');
  const p3 = getMenuFromRestaurant('Khazar');

  return Promise.all([p1, p2, p3]).catch((err) => {
    console.log(`Menus failed to load: ${err.message}`);
  });
}
