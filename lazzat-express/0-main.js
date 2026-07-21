import confirmOrder from './0-confirm_order.js';

confirmOrder(101)
  .then((data) => console.log(data));

confirmOrder(-5)
  .catch((err) => console.log(err.message));
