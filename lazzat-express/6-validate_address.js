export default function validateAddress(address) {
  if (address.length < 10 && address.length > 0) {
    throw new Error('Address is too short');
  }
  if (typeof address !== 'string' || address.trim() === '') {
    throw new Error('Address cannot be empty');
  }
  const msg = 'Delivery address: ' + address;
  return msg;
}
