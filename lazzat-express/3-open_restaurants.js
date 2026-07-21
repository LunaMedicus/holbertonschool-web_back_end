export function checkRestaurant(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'Nargiz') reject(new Error(`${name} is closed`));
      else resolve(`${name} is open`);
    }, 800);
  });
}

export default function openRestaurants() {
  const firuza = checkRestaurant('Firuza');
  const nargiz = checkRestaurant('Nargiz');
  const khazar = checkRestaurant('Khazar');

  return Promise.allSettled([firuza, nargiz, khazar]).then((results) => {
    const open = [];
    for (let i = 0; i < results.length; i++) {
      if (results[i].status === 'fulfilled') open.push(results[i].value);
    }
    return open;
  });
}
