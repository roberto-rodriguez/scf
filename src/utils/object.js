export function listToObject(array, prop) {
  if (!array) return {};

  return array.reduce((obj, item) => {
    obj[item[prop || 'id']] = item;
    return obj;
  }, {});
}
