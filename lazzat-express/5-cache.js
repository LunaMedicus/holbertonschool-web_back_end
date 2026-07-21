const cache = {
  home: 'Nizami St. 10',
  work: '28 May St. 5'
};

export default function readFromCache(key) {
  if (cache[key] !== undefined)
    return Promise.resolve(cache[key]);
  return Promise.reject(new Error('Address not found in cache'));
}
