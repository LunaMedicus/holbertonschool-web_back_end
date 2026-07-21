import validateAddress from './6-validate_address.js';

const addresses = ['Baku, Nizami street 25', 'home', ''];

addresses.forEach((a) => {
  try {
    console.log(validateAddress(a));
  } catch (err) {
    console.log(`Validation error: ${err.message}`);
  } finally {
    console.log('---');
  }
});
